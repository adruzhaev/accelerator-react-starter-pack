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
      state.items = state.items.filter((item) => item.guitar.id !== action.payload.guitar.id);
    },
    incrementGuitarQuantity: (state, action) => {
      const guitar = state.items.find((item) => item.guitar.id === action.payload);
      guitar?.quantity && guitar.quantity++;
    },
    decrementGuitarQuantity: (state, action) => {
      const guitar = state.items.find((item) => item.guitar.id === action.payload);
      guitar?.quantity && guitar.quantity--;
    },
  },
});

export const { addToCart, deleteFromCart, incrementGuitarQuantity, decrementGuitarQuantity } = cart.actions;
export default cart.reducer;
