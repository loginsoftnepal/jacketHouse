import { StateCreator } from 'zustand'
import { Product } from './productSlice'
import Image1 from '../../image/man 1.png'

export interface CartSlice {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void
}

export const CreateCartSlice: StateCreator<CartSlice> = (set, get) => ({
  cart: [
    {
      id: 1,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
    {
      id: 2,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
    {
      id: 3,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
    {
      id: 4,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
    {
      id: 5,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
    {
      id: 6,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
    {
      id: 7,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
    {
      id: 8,
      title: 'Jacket',
      image: Image1,
      description: 'This jacket can only be found in jackethouse',
      price: 2000,
      size: 'xl',
      color: 'red',
      quantity: 1,
      category: 'mens',
      brand: 'legacy',
    },
  ],
  addToCart: (product: Product) => {
    const cart = get().cart
    const findProduct = cart.find((p) => p.id == product.id)
    if (findProduct) {
      findProduct.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })    
    }
    set({ cart })
  },
  removeFromCart: (productId: number) => {
    set({ cart: get().cart.filter((product) => product.id !== productId) })
  },
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => {
    const cart = get().cart
    const findProduct = cart.find((p) => p.id === productId)
    if (findProduct) {
      if (action === 'decrease') {
        findProduct.quantity =
          findProduct.quantity > 1
            ? findProduct.quantity + 1
            : findProduct.quantity
      } else {
        findProduct.quantity += 1
      }
    }
    set({ cart })
  },
})
