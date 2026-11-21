import { z } from 'zod';
import { categories, conditions, districts } from './listing.constant';

const [firstDistrict, ...restDistricts] = districts;
const [firstCondition, ...restConditions] = conditions;
const [firstCategory, ...restCategories] = categories;

const createListingValidationSchema = z.object({
  body: z.object({
    title: z.string().trim(),
    description: z.string().trim(),
    price: z.number(),
    condition: z.enum([firstCondition, ...restConditions]),
    images: z.array(z.string()),
    userID: z.string().optional(),
    status: z.enum(['available', 'sold']).default('sold'),
    category: z.enum([firstCategory, ...restCategories]),
    brand: z.string().trim().optional(),
    location: z.enum([firstDistrict, ...restDistricts]),
    negotiable: z.enum(['yes', 'no']).optional(),
    warranty: z.string().optional(),
    contactNumber: z.string().optional(),
    isDeleted: z.boolean().default(false),
  }),
});

const updateListingValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().optional(),
    description: z.string().trim().optional(),
    price: z.number().optional(),
    condition: z.enum([firstCondition, ...restConditions]).optional(),
    images: z.array(z.string()).optional(),
    userID: z.string().optional(),
    status: z.enum(['available', 'sold']).default('sold'),
    category: z.enum([firstCategory, ...restCategories]).optional(),
    brand: z.string().trim().optional(),
    location: z.enum([firstDistrict, ...restDistricts]).optional(),
    negotiable: z.enum(['yes', 'no']).optional(),
    warranty: z.string().optional(),
    contactNumber: z.string().optional(),
    isDeleted: z.boolean().default(false),
  }),
});

export const ListingValidationSchema = {
  createListingValidationSchema,
  updateListingValidationSchema,
};
