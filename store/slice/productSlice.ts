import { StaticImageData } from "next/image";
import { StateCreator } from "zustand";

export interface Product {
    id: number,
    title: string,
    image: string | StaticImageData,
    price: number,
    quantity: number,
    description: string,
    category: string,
    brand: string,
    color?: string,
    size?: string,
}

export interface IProductSlice {
    products: Product[],
    fetchProducts: () => void;
}

export const createProductSlice: StateCreator<IProductSlice> = (set) => ({
    products: [],
    fetchProducts: async () => {
         const res = await fetch(`${process.env.SERVER_URL}`)
         set({ products: await res.json()})
    }
})