import { create } from 'zustand';
import { AuthSlice, createAuthSlice } from './slice/authSlice';
import { CartSlice, CreateCartSlice } from './slice/cartSlice';
import { IProductSlice, createProductSlice } from './slice/productSlice';

type StoreState = AuthSlice & IProductSlice & CartSlice;

export const useStore =  create<StoreState>((...a) => ({
    ...createAuthSlice(...a),
    ...createProductSlice(...a),
    ...CreateCartSlice(...a),
})) 