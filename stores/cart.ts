import { StateCreator } from 'zustand'

export interface Product {
  id: number
  name: string
  price: number
  category: string
  description: string
  size: string
  color: string
  quantity: number
}

export interface CartState {
  cart: Product[]
  addToCart: (item: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, action: 'increase' | 'decrease') => void
}
export const createCartSlice: StateCreator<CartState> = (set, get) => ({
  cart: [],
  addToCart: (item: Product) => {
    const cart = get().cart
    const findProduct = cart.find((p) => p.id === item.id)
    if (findProduct) {
      findProduct.quantity += 1
    } else {
      cart.push({ ...item, quantity: 1 })
    }

    set({ cart })
  },
  removeFromCart: (productId: number) => {
    set({ cart: get().cart.filter((product) => product.id !== productId) })
  },

  updateQuantity: (productId: number, action: 'increase' | 'decrease') => {
    const cart = get().cart
    const findProduct = cart.find((product) => product.id == productId)
    if (findProduct) {
      if (action == 'increase') {
        findProduct.quantity += 1
      } else {
        findProduct.quantity > 0
          ? findProduct.quantity - 1
          : findProduct.quantity
      }
    }

    set({ cart })
  },
})
