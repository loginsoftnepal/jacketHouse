import { StaticImageData } from 'next/image'
import { StateCreator } from 'zustand'

export interface IProduct {
  id: number;
  title: string;
  category: string;
  available?: number;
  price: number;
  description: string;
  brand: string;
  colors?: string;
  sizes?: string;
}


export interface IProductSlice {
  products: IProduct[]
  fetchProducts: () => void
}

export const createProductSlice: StateCreator<IProductSlice> = (set, get) => ({
  products: [],
  fetchProducts: async () => { 
    const res = await fetch(`http://localhost:3000/api/product`)
    set({ products: await res.json() })
  },
  setProducts: (products: IProduct[]) => {
    set({ products: products })
  },
  addNewProduct: (product: IProduct) => {
     const allProduct = get().products;
     set({ products: [...allProduct, product]})
  },
  updateProduct: (product: IProduct) => {
    const allProducts = get().products;
    const updatedProducts = allProducts.map((p) => p.id !== product.id ? p : product)
    set({ products: updatedProducts});
  },
  deleteProduct: (product: IProduct) => {
    const allProducts = get().products;
    const filteredProduct = allProducts.filter((p) => p.id !== product.id)
    set({ products: filteredProduct });
  }
})
