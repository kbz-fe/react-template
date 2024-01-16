export {};

declare global {
  export interface Product {
    id?: string;
    title: string;
    description: string;
    price: number;
    rating?: number;
    discountPercentage?: number;
    stock: number;
    category?: string;
    brand?: string;
    thumbnail?: string;
    images?: string[];
  }

  export interface ProductsResponse {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
  }

  export type TypeOfUser = 'Develop' | 'Admin' | 'Support';
}
