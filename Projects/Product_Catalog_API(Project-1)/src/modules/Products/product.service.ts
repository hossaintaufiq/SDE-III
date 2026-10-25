import {randomUUID} from "node:crypto";
import type { Product } from "./product.types";
import type { CreateProductInput } from "./product.validation";


export interface ListProductsOptions {
  category?: string;
  search?: string;
  sortBy?: "name" | "price" | "createdAt";
  order?: "asc" | "desc";
  page: number;
  limit: number;
}

export interface PaginatedProducts {
  data: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}


const products= new Map<string, Product>() ; 

export class DuplicateProductError extends Error{
    constructor(sku:string){
        super(`A product with SKU  ${sku} already exists`); 
        this.name = "DuplicateProductError";
    }
}

export function createProduct(input: CreateProductInput): Product{
   const normalizedsku= input.sku.trim().toUpperCase();
//    duplicate SKU check: Before creating a new product, we check if a product with the same SKU already exists in the products Map. If it does, we throw a DuplicateProductError to prevent duplicate entries.
   const skuExists= Array.from(products.values()).some((product)=> product.sku.toUpperCase() === normalizedsku);
   if(skuExists){
    throw new DuplicateProductError(normalizedsku);
   }


    const now = new Date().toISOString();

    const product: Product = {
        id: randomUUID(),
        ...input,
        createdAt: now,
        updatedAt: now
    };
    products.set(product.id, product);
    return product;
}

export function getProducts(): Product[]{
    return Array.from(products.values()); 
}

export function getProductById(id: string): Product | undefined{
    return products.get(id); 
}
export function deleteProduct(id: string): boolean{
    return products.delete(id); 
}


// new function to list products with filtering, sorting, and pagination
export function listProducts(
  options: ListProductsOptions
): PaginatedProducts {
  let result = Array.from(products.values());

  // 1. Filter by category.
  if (options.category) {
    result = result.filter(
      (product) =>
        product.category.toLowerCase() ===
        options.category!.trim().toLowerCase()
    );
  }

    // 2. Search product names and SKUs.
  if (options.search) {
    const term = options.search.trim().toLowerCase();

    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.sku.toLowerCase().includes(term)
    );
  }


  // 3. Sort the results.
  const sortBy = options.sortBy ?? "createdAt";
  const order = options.order ?? "desc";
  const direction = order === "asc" ? 1 : -1;

  result.sort((a, b) => {
    const left = a[sortBy];
    const right = b[sortBy];

    if (left < right) return -1 * direction;
    if (left > right) return 1 * direction;
    return 0;
  });


  // 4. Calculate pagination.
  const total = result.length;
  const totalPages = Math.ceil(total / options.limit);
  const start = (options.page - 1) * options.limit;

  return {
    data: result.slice(start, start + options.limit),
    pagination: {
      page: options.page,
      limit: options.limit,
      total,
      totalPages,
    },
  };
}