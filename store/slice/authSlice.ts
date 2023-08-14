import { StateCreator } from "zustand"

export type User = {
    name: string,
    email: string,
}

export interface AuthSlice  {
    user: User | null,
    addUser: (data: User) => void,
    deleteUser: () => void,
}

export const createAuthSlice:StateCreator<AuthSlice> = (set) => ({
    user: null,
    addUser: (data) => set((state) => ({ user: data  })),
    deleteUser: () => set((state) => ({ user: null})),
})