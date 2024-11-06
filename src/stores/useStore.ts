// Made by: Daniel
import { create } from "zustand";
import type { SallingResponse } from "../lib/types";

type CurrentStoreType = Partial<SallingResponse[number]["store"]>;
type StoreProductsType = SallingResponse[number]["clearances"];

interface StoreState {
    currentStore: CurrentStoreType,
    products: StoreProductsType,
    setCurrentStore: (store: CurrentStoreType) => void,
    setProducts: (clearances: StoreProductsType) => void,
}

export const useStore = create<StoreState>((set) => ({
    currentStore: {},
    setCurrentStore: (store) => set({ currentStore: store }),
    products: [],
    setProducts: (clearances) => set({products: clearances}), 
}))
