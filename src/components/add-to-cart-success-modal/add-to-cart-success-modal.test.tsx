import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AddToCartSuccessModal } from './add-to-cart-success-modal';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';

const handleModalClose = jest.fn();

describe('AddToCartSuccessModal Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddToCartSuccessModal
            isModalShown
            handleModalClose={handleModalClose}
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Продолжить покупки')).toBeInTheDocument();
  });

  test('should clicked once', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddToCartSuccessModal
            isModalShown
            handleModalClose={handleModalClose}
          />
        </BrowserRouter>
      </Provider>,
    );
    const button = screen.getByTestId('continue-shopping');
    fireEvent.click(button);
    expect(handleModalClose).toHaveBeenCalledTimes(1);
  });
});
