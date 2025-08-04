import { create } from 'zustand';

const useStore = create((set) => ({
  tokenBalancesInfo: [],
  setTokenBalancesInfo: (balances) => set({ tokenBalancesInfo: balances }),
}))

export default useStore;