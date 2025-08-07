import { create } from 'zustand';

const useStore = create((set) => ({
  tokenBalancesInfo: [],
  nftBalancesInfo: [],
  recentTransactionsInfo: [],
  isLoading: false,

  setTokenBalancesInfo: (balances) => set({ tokenBalancesInfo: balances }),
  setNftBalancesInfo: (balances) => set({ nftBalancesInfo:balances }),
  setRecentTransactionsInfo: (tx) => set({ recentTransactionsInfo:tx }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}))

export default useStore;