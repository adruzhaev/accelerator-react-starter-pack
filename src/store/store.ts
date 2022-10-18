import { configureStore } from '@reduxjs/toolkit';
import { axiosInstance } from '../api/api';
import guitarsReducer from './guitars/slice';
import paginationReducer from './pagination/slice';
import filtersReducer from './filters/slice';
import cartReducer from './cart/slice';

export const store = configureStore({
  reducer: {
    guitars: guitarsReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosInstance,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
