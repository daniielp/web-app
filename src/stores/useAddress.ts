import { create } from "zustand";
import type { DawaResponse } from "../lib/types";

type CurrentAddressType = Partial<DawaResponse[number]>;

interface AddressState {
    currentAddress: CurrentAddressType,
    radius: number,
    setRadius: (number: number) => void;
    setCurrentAddress: (address: CurrentAddressType) => void,
}

export const useAddress = create<AddressState>((set) => ({
    currentAddress: {},
    setCurrentAddress: (address) => set({ currentAddress: address }),
    radius: 5,
    setRadius: (number) => set({radius: number})
}))
