import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/api';
import { ActionType } from '../../constants/action-type';
import { ApiRoute } from '../../constants/api-route';
import { MAX_ITEM_QUANTITY, MIN_ITEM_QUANTITY } from '../../constants/cart';
import { ICart } from '../../types/ICart';

export const sendCouponForDiscount = createAsyncThunk<Promise<void>, string>(
  ActionType.SEND_COUPON_FOR_DISCOUNT,
  async (coupon: string) => {
    try {
      const res = await axiosInstance.post(`${process.env.REACT_APP_SERVER_URL}${ApiRoute.Coupons}`, {coupon});
      return res.data;
    } catch(error) {
      throw new Error();
    }
  },
);

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

      if (guitar?.quantity && guitar.quantity >= MAX_ITEM_QUANTITY) {
        guitar.quantity = MAX_ITEM_QUANTITY;
      } else {
        guitar?.quantity && guitar.quantity++;
      }
    },
    decrementGuitarQuantity: (state, action) => {
      const guitar = state.items.find((item) => item.guitar.id === action.payload);
      guitar?.quantity && guitar.quantity--;
    },
    changeGuitarInputQuantity: (state, action) => {
      const guitar = state.items.find((item) => item.guitar.id === action.payload.id);

      if (guitar?.quantity && action.payload.value) {
        guitar.quantity = Number(action.payload.value);
      }

      if (guitar?.quantity === 0) {
        guitar.quantity = MIN_ITEM_QUANTITY;
      }

      if (guitar?.quantity && guitar.quantity >= MAX_ITEM_QUANTITY) {
        guitar.quantity = MAX_ITEM_QUANTITY;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendCouponForDiscount.fulfilled, (state, action: AnyAction) =>  {
        state.coupon = action.payload;
      })
      .addCase(sendCouponForDiscount.rejected, (state, action: AnyAction) =>  {
        state.coupon = '';
      });
  },
});

export const {
  addToCart, deleteFromCart, incrementGuitarQuantity, decrementGuitarQuantity, changeGuitarInputQuantity,
} = cart.actions;
export default cart.reducer;
