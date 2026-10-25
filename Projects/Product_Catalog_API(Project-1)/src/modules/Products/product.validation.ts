import {z} from "zod";

export const createProductSchema = z.object({
    sku: z.string().trim().min(1).max(50),
    name: z.string().trim().min(2).max(150),
    price: z.number().finite().nonnegative(),
    stock: z.number().int().nonnegative(),
    category: z.string().trim().min(2).max(80),
})


export type  CreateProductInput = z.infer<typeof createProductSchema>;

// Engineering concept: TypeScript interfaces protect your code during development,
//  but they don't validate JSON received from an HTTP client. 
//  Zod does that at runtime.