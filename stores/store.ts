import { create } from 'zustand'
import { CartState, createCartSlice } from './cart'
import { ProductSlice, createProductSlice } from './product'

type StoreSlice = CartState & ProductSlice

export const useAppStore = create<StoreSlice>()((...a) => ({
  ...createCartSlice(...a),
  ...createProductSlice(...a),
}))
