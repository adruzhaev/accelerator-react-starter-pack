import { fireEvent, render, screen } from '@testing-library/react';
import { ProductItemInCart } from './product-item-in-cart';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createMockGuitarInCart } from '../../helpers/get-mock-guitars';

const testGuitar = createMockGuitarInCart();

describe('ProductItemInCart component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductItemInCart
            guitar={testGuitar}
          />
        </BrowserRouter>
      </Provider>,
    );

    const deleteButton = screen.getByTestId('delete-item');
    expect(fireEvent.click(deleteButton)).toBeTruthy();
  });
});
