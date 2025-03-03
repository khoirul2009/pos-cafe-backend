import z from 'zod';

export const serviceSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  price: z.number().min(0),
  image: z
    .union([
      z.instanceof(File), // Allows a valid File
      z.null(), // Allows null
      z.undefined() // Allows undefined (optional field)
    ])
    .refine((file) => file === null || file instanceof File, {
      message: 'Image must be a valid file or null'
    }),
  discount: z.number().optional(),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long'),
  category_id: z.number(),
  location: z.string().min(3, 'Location must be at least 3 characters long'),
  available: z.boolean({
    errorMap: () => ({ message: "Available must be either 'true' or 'false'" })
  })
});

export const serviceUpdateSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  price: z.number().min(0),
  image: z.any().optional(),
  discount: z.number().min(0).optional(),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters long'),
  category_id: z.number(),
  location: z.string().min(3, 'Location must be at least 3 characters long'),
  available: z.boolean({
    errorMap: () => ({ message: "Available must be either 'true' or 'false'" })
  })
});
