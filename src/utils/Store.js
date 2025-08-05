import { create } from 'zustand';

const useStore = create((set) => ({
  tokenBalancesInfo: [],
  nftBalancesInfo: [],
  recentTransactionsInfo: [],

  setTokenBalancesInfo: (balances) => set({ tokenBalancesInfo: balances }),
  setNftBalancesInfo: (balances) => set({ nftBalancesInfo:balances }),
  setRecentTransactionsInfo: (tx) => set({ recentTransactionsInfo:tx }),
}))

export default useStore;