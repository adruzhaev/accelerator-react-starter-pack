/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';
import { ICart } from '../../types/ICart';

export const initialState: ICart = {
  items: [],
  coupon: '',
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      const itemToDelete = state.items.findIndex((item) => item.guitar.id === action.payload.id);
      console.log('itemToDelete: ', itemToDelete);
    },
  },
});

export const { addToCart } = cart.actions;
export default cart.reducer;
