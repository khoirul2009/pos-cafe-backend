'use client';

import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import clsx from 'clsx';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'bg-white border-gray-200 text-gray-900',
        success: 'bg-green-50 border-green-200 text-green-900',
        error: 'bg-red-50 border-red-200 text-red-900'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export function useToast() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [variant, setVariant] = React.useState<'default' | 'success' | 'error'>(
    'default'
  );

  const showToast = ({
    title,
    description,
    variant = 'default'
  }: {
    title: string;
    description: string;
    variant?: 'default' | 'success' | 'error';
  }) => {
    setTitle(title);
    setDescription(description);
    setVariant(variant);
    setOpen(true);
  };

  const ToastComponent = (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={open}
        onOpenChange={setOpen}
        className={clsx(toastVariants({ variant }))}
      >
        <div className="grid gap-1">
          <ToastPrimitive.Title className="text-sm font-semibold">
            {title}
          </ToastPrimitive.Title>
          <ToastPrimitive.Description className="text-sm">
            {description}
          </ToastPrimitive.Description>
        </div>
        <ToastPrimitive.Close className="absolute right-2 top-2 rounded-md p-1 focus:outline-none">
          <X className="h-4 w-4" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[100] m-0 flex max-w-[100vw] flex-col p-6" />
    </ToastPrimitive.Provider>
  );

  return { toast: showToast, ToastComponent };
}
