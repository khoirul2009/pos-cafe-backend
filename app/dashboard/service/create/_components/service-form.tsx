'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  serviceSchema,
  serviceUpdateSchema
} from '@/form-validation/service-schema';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { Category } from '@/prisma/generated/client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { Plus } from 'lucide-react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

type ServiceFormData = z.infer<typeof serviceSchema>;

interface ServiceFormProps {
  id?: string;
  defaultValues?: ServiceFormData;
}

export default function ServiceForm({ id, defaultValues }: ServiceFormProps) {
  const queryClient = useQueryClient();
  const { toast, ToastComponent } = useToast();
  const [categories, setCategories] = useState<Category[]>();
  const [isCreating, setIsCreating] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const form = useForm<ServiceFormData>({
    resolver: zodResolver(defaultValues ? serviceUpdateSchema : serviceSchema),
    defaultValues: defaultValues
      ? { ...defaultValues, image: null }
      : {
          title: '',
          price: 0,
          available: false,
          category_id: 0,
          description: '',
          discount: 0,
          location: '',
          image: null
        }
  });

  const createMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch('/api/service', {
        method: 'POST',
        body: data
      });
      if (!response.ok) {
        throw new Error('Failed to create service');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'service berhasil dibuat!',
        variant: 'success'
      });
      queryClient.invalidateQueries({ queryKey: ['services'] });
      form.reset(defaultValues);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Gagal membuat service.',
        variant: 'error'
      });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch(`/api/service/${id}`, {
        method: 'PUT',
        body: data
      });
      if (!response.ok) {
        throw new Error('Failed to update service');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'service berhasil diperbarui!',
        variant: 'success'
      });
      queryClient.invalidateQueries({ queryKey: ['services'] });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Gagal memperbarui service.',
        variant: 'error'
      });
    }
  });

  const onSubmit = (data: ServiceFormData) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('price', data.price.toString());
    formData.append('description', data.description);
    formData.append('category_id', data.category_id.toString());
    formData.append('available', data.available as unknown as string);
    formData.append('location', data.location);

    if (data.discount) formData.append('discount', data.discount.toString());
    if (data.image && data.image instanceof File)
      formData.append('image', data.image);

    if (id) {
      updateMutation.mutate(formData);
    } else {
      createMutation.mutate(formData);
    }
  };

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const response = await axios.get('/api/category');
      if (response.status === 200) {
        setCategories(response.data.data);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch categories',
        variant: 'error'
      });
    }
  }

  async function handleNewCategory(event: any) {
    try {
      const response = await axios.post('/api/category', {
        title: newCategory
      });

      if (response.status === 200) {
        toast({
          title: 'Success',
          description: 'New category added',
          variant: 'success'
        });

        setIsCreating(false);

        fetchCategories();
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'failed to add category',
        variant: 'error'
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Foto Pre-wedding" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Price"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="">
            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem className="mb-2 ">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value.toString()}
                      onValueChange={(e) => field.onChange(Number(e))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          {categories?.map(({ id, title }) => (
                            <SelectItem
                              key={id.toString()}
                              value={id.toString()}
                            >
                              {title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="mt-3"
              onClick={() => setIsCreating(true)}
            >
              <Plus /> Add new category
            </Button>
          </div>
          {isCreating && (
            <div className="mt-2 flex max-w-md items-center gap-2">
              <Input
                type="text"
                placeholder="New category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <Button type="button" onClick={handleNewCategory}>
                Save
              </Button>
              <Button
                type="button"
                variant={'secondary'}
                onClick={() => setIsCreating(false)}
              >
                Cancel
              </Button>
            </div>
          )}
          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="available">Available</FormLabel>
                <FormControl>
                  <Switch
                    className="block"
                    id="available"
                    defaultChecked={field.value}
                    onChange={field.onChange}
                    value={field.value.toString()}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="discount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={100}
                    placeholder="1000"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="JL. Pahlawan No. 1 RT xx RW XX"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <ReactQuill
                    value={field.value}
                    onChange={field.onChange}
                    theme="snow" // Snow is the default theme
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        field.onChange(e.target.files[0]);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex h-4 gap-5">
            <Button
              type="submit"
              className="w-full"
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              {id ? 'Update' : 'Create'}
            </Button>
            <Button variant={'secondary'} type="button" className="w-full">
              <Link className="w-full" href="/dashboard/service">
                Cancel
              </Link>
            </Button>
          </div>
        </form>
      </Form>
      {ToastComponent}
    </>
  );
}
