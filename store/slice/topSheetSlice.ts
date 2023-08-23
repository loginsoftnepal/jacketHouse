import { StateCreator } from "zustand";

export interface TopSheet {
    topSheet: boolean,
    topSheetContent?: React.ReactNode,
    setTopSheet: (val: boolean) => void;
    setTopSheetContent: (val: React.ReactNode) => void;
}

export const topsheetSlice: StateCreator<TopSheet> = (set, get) => ({
    topSheet: false,
    topSheetContent: null,
    setTopSheet: (val: boolean) => {
        set({topSheet: true})
    },
    setTopSheetContent: (val: React.ReactNode) => {
        set({ topSheetContent: val })
    }
})