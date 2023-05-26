import { create } from 'zustand'

// eslint-disable-next-line no-unused-vars
export const useStore = create((set) => ({
  basketCard: [],
  total:0,
  // eslint-disable-next-line no-undef
  updateTotal: (price )=> set((state) => ({ total : state.total + price })),
  
  addToCard: (product) => set((state) => ({ basketCard: [...state.basketCard, product] })),
  removeAllBears: () => set({ basketCard: []}),
}))


// const countReducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return { total: state.total + action.price }
//       case 'decrement':
//         return { total: state.total - action.price }
//       default:
//         return state
//     }
//   }