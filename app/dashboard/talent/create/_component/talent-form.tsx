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
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const talentSchema = z.object({
  name: z.string(),
  description: z.string(),
  position: z.string(),
  image: z
    .union([z.instanceof(File), z.null(), z.undefined()])
    .refine((file) => file === null || file instanceof File, {
      message: 'Image must be a valid file or null'
    })
});

type TalentFormData = z.infer<typeof talentSchema>;

interface TalentFormProps {
  id?: string;
  defaultValues?: TalentFormData;
}

export default function TalentForm({ id, defaultValues }: TalentFormProps) {
  const queryClient = useQueryClient();
  const { toast, ToastComponent } = useToast();

  const form = useForm<TalentFormData>({
    resolver: zodResolver(talentSchema),
    defaultValues: defaultValues || {
      name: '',
      description: '',
      position: '',
      image: null
    }
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  const createMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch('/api/talent', {
        method: 'POST',
        body: data
      });
      if (!response.ok) {
        throw new Error('Failed to create talent');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Talent created successfully!',
        variant: 'success'
      });
      queryClient.invalidateQueries({ queryKey: ['talents'] });
      form.reset();
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to create talent.',
        variant: 'error'
      });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch(`/api/talent/${id}`, {
        method: 'PUT',
        body: data
      });
      if (!response.ok) {
        throw new Error('Failed to update talent');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Talent updated successfully!',
        variant: 'success'
      });
      queryClient.invalidateQueries({ queryKey: ['talents'] });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update talent.',
        variant: 'error'
      });
    }
  });

  const onSubmit = (data: TalentFormData) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('position', data.position);
    formData.append('description', data.description);
    if (data.image && data.image instanceof File) {
      formData.append('image', data.image);
    }
    if (id) {
      updateMutation.mutate(formData);
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <ReactQuill {...field} />
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
        <Button
          type="submit"
          disabled={createMutation.isPending || updateMutation.isPending}
        >
          {id ? 'Update' : 'Create'}
        </Button>
      </form>
      {ToastComponent}
    </Form>
  );
}
