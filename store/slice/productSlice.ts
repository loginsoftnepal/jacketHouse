import { StaticImageData } from 'next/image'
import { StateCreator } from 'zustand'

export interface Product {
  id: number 
  title: string
  image: string | StaticImageData
  price: number
  available?: number
  description: string
  category: string
  brand: string
  colors?: string
  sizes?: string
  quantity?: number
}

export interface IProductSlice {
  products: Product[]
  fetchProducts: () => void
}

export const createProductSlice: StateCreator<IProductSlice> = (set, get) => ({
  products: [],
  fetchProducts: async () => { 
    const res = await fetch(`http://localhost:3000/api/product`)
    set({ products: await res.json() })
  },
  setProducts: (products: Product[]) => {
    set({ products: products })
  },
  addNewProduct: (product: Product) => {
     const allProduct = get().products;
     set({ products: [...allProduct, product]})
  },
  updateProduct: (product: Product) => {
    const allProducts = get().products;
    const updatedProducts = allProducts.map((p) => p.id !== product.id ? p : product)
    set({ products: updatedProducts});
  },
  deleteProduct: (product: Product) => {
    const allProducts = get().products;
    const filteredProduct = allProducts.filter((p) => p.id !== product.id)
    set({ products: filteredProduct });
  }
})
