import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AddToCartModal } from './add-to-cart-modal';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';
import { createMockGuitar } from '../../helpers/get-mock-guitars';

const handleModalClose = jest.fn();
const handleAddToCartButtonClick = jest.fn();
const guitar = createMockGuitar();

describe('AddToCartModal Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddToCartModal
            isModalShown
            handleModalClose={handleModalClose}
            handleAddToCartButtonClick={handleAddToCartButtonClick}
            guitar={guitar}
            isGuitarInCart
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();
  });

  test('should clicked once', () => {
    // const isModalShown = false;
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddToCartModal
            isModalShown
            handleModalClose={handleModalClose}
            handleAddToCartButtonClick={handleAddToCartButtonClick}
            guitar={guitar}
            isGuitarInCart
          />
        </BrowserRouter>
      </Provider>,
    );
    const button = screen.getByTestId('close-add-to-cart');
    fireEvent.click(button);
    expect(handleModalClose).toHaveBeenCalledTimes(1);
  });
});
