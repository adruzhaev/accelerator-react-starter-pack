import { createMockGuitarInCart } from '../../helpers/get-mock-guitars';
import { ICartItem } from '../../types/ICart';
import cartReducer, {
  initialState, addToCart, deleteFromCart, incrementGuitarQuantity,
  decrementGuitarQuantity, changeGuitarInputQuantity
} from './slice';

describe('Cart reducer', () => {
  let guitar: ICartItem;

  beforeEach(() => {
    guitar = createMockGuitarInCart();
  });

  test('Add guitar to cart', () => {
    expect(cartReducer(initialState, addToCart(guitar)))
      .toEqual({
        ...initialState,
        items: [guitar],
      });
  });

  test('Delete guitar from cart', () => {
    expect(cartReducer({...initialState, items: [guitar]}, deleteFromCart(guitar)))
      .toEqual({
        ...initialState,
        items: [],
      });
  });

  test('Increment guitar quantity', () => {
    expect(cartReducer({...initialState, items: [{guitar: guitar.guitar, quantity: 1}]}, incrementGuitarQuantity(guitar.guitar.id)))
      .toEqual({
        ...initialState,
        items: [{guitar: guitar.guitar, quantity: 2}],
      });
  });

  test('Decrement guitar quantity', () => {
    expect(cartReducer({...initialState, items: [{guitar: guitar.guitar, quantity: 1}]}, decrementGuitarQuantity(guitar.guitar.id)))
      .toEqual({
        ...initialState,
        items: [{guitar: guitar.guitar, quantity: 0}],
      });
  });

  test('Change guitar input quantity', () => {
    expect(cartReducer({...initialState, items: [{guitar: guitar.guitar, quantity: 1}]}, changeGuitarInputQuantity({
      id: guitar.guitar.id, value: 10,
    })))
      .toEqual({
        ...initialState,
        items: [{guitar: guitar.guitar, quantity: 10}],
      });
  });
});
