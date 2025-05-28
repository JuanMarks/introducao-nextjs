export type Product = {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    category?: string;
    inStock?: boolean;
};

export interface Links {
   name: string;
    href: string;
}