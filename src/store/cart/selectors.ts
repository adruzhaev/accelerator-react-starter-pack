import { RootState } from '../store';

export const getGuitarsFromCart = (state: RootState) => state.cart.items;
export const getTotalPrice = (state: RootState) => state.cart.items.reduce((previous, current) => previous + current.guitar.price * current.quantity, 0);
export const getGuitarsQuantityFromCart = (state: RootState) => state.cart.items.reduce((previous, current) => previous + current.quantity, 0);
export const getDiscountPercentage = (state: RootState) => Number(state.cart.coupon);
