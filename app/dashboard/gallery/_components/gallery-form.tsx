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
import Link from 'next/link';

const formSchema = z.object({
  title: z.string().min(3, { message: 'Title minimal 3 karakter' }),
  image: z
    .any()
    .nullable()
    .refine(
      (file) => {
        if (!file) return true; // Jika tidak ada file, validasi lolos (untuk Update)
        return file.size <= 5 * 1024 * 1024;
      },
      {
        message: 'Maksimal ukuran gambar adalah 5MB'
      }
    )
    .refine(
      (file) => {
        if (!file) return true; // Jika tidak ada file, validasi lolos (untuk Update)
        return ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type);
      },
      {
        message: 'Format gambar harus JPEG, JPG, atau PNG'
      }
    )
});

type GalleryFormData = z.infer<typeof formSchema>;

interface GalleryFormProps {
  id?: string;
  defaultValues?: GalleryFormData;
}

export default function GalleryForm({ id, defaultValues }: GalleryFormProps) {
  const queryClient = useQueryClient();
  const { toast, ToastComponent } = useToast();

  const form = useForm<GalleryFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      title: '',
      image: null
    }
  });

  const createMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch('/api/gallery', {
        method: 'POST',
        body: data
      });
      if (!response.ok) {
        throw new Error('Failed to create gallery');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'gallery berhasil dibuat!',
        variant: 'success'
      });
      queryClient.invalidateQueries({ queryKey: ['gallerys'] });
      form.reset({
        title: '',
        image: null
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Gagal membuat gallery.',
        variant: 'error'
      });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await fetch(`/api/gallery/${id}`, {
        method: 'PUT',
        body: data
      });
      if (!response.ok) {
        throw new Error('Failed to update gallery');
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'gallery berhasil diperbarui!',
        variant: 'success'
      });
      queryClient.invalidateQueries({ queryKey: ['gallerys'] });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Gagal memperbarui gallery.',
        variant: 'error'
      });
    }
  });

  const onSubmit = (data: GalleryFormData) => {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.image) formData.append('image', data.image);

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
                  <Input placeholder="Title" {...field} />
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
              <Link className="w-full" href="/dashboard/gallery">
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
