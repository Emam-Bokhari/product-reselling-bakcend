"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingValidationSchema = void 0;
const zod_1 = require("zod");
const listing_constant_1 = require("./listing.constant");
const [firstDistrict, ...restDistricts] = listing_constant_1.districts;
const [firstCondition, ...restConditions] = listing_constant_1.conditions;
const [firstCategory, ...restCategories] = listing_constant_1.categories;
const createListingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().trim(),
        description: zod_1.z.string().trim(),
        price: zod_1.z.number(),
        condition: zod_1.z.enum([firstCondition, ...restConditions]),
        images: zod_1.z.array(zod_1.z.string()),
        userID: zod_1.z.string().optional(),
        status: zod_1.z.enum(['available', 'sold']).default('sold'),
        category: zod_1.z.enum([firstCategory, ...restCategories]),
        brand: zod_1.z.string().trim().optional(),
        location: zod_1.z.enum([firstDistrict, ...restDistricts]),
        negotiable: zod_1.z.enum(['yes', 'no']).optional(),
        warranty: zod_1.z.string().optional(),
        contactNumber: zod_1.z.string().optional(),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
const updateListingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().trim().optional(),
        description: zod_1.z.string().trim().optional(),
        price: zod_1.z.number().optional(),
        condition: zod_1.z.enum([firstCondition, ...restConditions]).optional(),
        images: zod_1.z.array(zod_1.z.string()).optional(),
        userID: zod_1.z.string().optional(),
        status: zod_1.z.enum(['available', 'sold']).default('sold'),
        category: zod_1.z.enum([firstCategory, ...restCategories]).optional(),
        brand: zod_1.z.string().trim().optional(),
        location: zod_1.z.enum([firstDistrict, ...restDistricts]).optional(),
        negotiable: zod_1.z.enum(['yes', 'no']).optional(),
        warranty: zod_1.z.string().optional(),
        contactNumber: zod_1.z.string().optional(),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
exports.ListingValidationSchema = {
    createListingValidationSchema,
    updateListingValidationSchema,
};
