import { RootState } from '../store';

export const getGuitarsFromCart = (state: RootState) => state.cart.items;
