import { StateCreator } from "zustand";
import { Product } from "./cart";

export interface ProductSlice {
    products: Product[],
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
    products: [],
})