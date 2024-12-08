import { createSelector, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectCartItemAmountById: (state, id) => state[id],
  },
});

export const { selectCartItemAmountById } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartState) => {
    console.log(cartState);
    return Object.keys(cartState).reduce((acc, id) => {
      acc.push({ id, amount: cartState[id] });

      return acc;
    }, []);
  }
);
