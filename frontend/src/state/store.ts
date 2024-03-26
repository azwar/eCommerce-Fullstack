import { create } from 'zustand'

interface IDrawerMenuState {
    isOpen: boolean,
    setOpen: (state: boolean) => void,
}

export const useDrawerStore = create<IDrawerMenuState>((set) => ({
  isOpen: false,
  setOpen: (state) => set({ isOpen: state }),
}));