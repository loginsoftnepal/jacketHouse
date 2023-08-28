import { create } from 'zustand'
import { AuthSlice, createAuthSlice } from './slice/authSlice'
import { CartSlice, CreateCartSlice } from './slice/cartSlice'
import { IProductSlice, createProductSlice } from './slice/productSlice'
import { TopSheet, topsheetSlice } from './slice/topSheetSlice'

type StoreState = AuthSlice & IProductSlice & CartSlice & TopSheet

export const useStore = create<StoreState>((...a) => ({
  ...createAuthSlice(...a),
  ...createProductSlice(...a),
  ...CreateCartSlice(...a),
  ...topsheetSlice(...a),
}))
