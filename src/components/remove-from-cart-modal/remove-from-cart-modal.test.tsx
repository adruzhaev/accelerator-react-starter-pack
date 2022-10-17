import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RemoveFromCartModal } from './remove-from-cart-modal';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';
import { createMockGuitar } from '../../helpers/get-mock-guitars';

const handleModalClose = jest.fn();
const guitar = createMockGuitar();

describe('RemoveFromCartModal Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RemoveFromCartModal
            isModalShown
            handleModalClose={handleModalClose}
            guitar={guitar}
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
          <RemoveFromCartModal
            isModalShown
            handleModalClose={handleModalClose}
            guitar={guitar}
          />
        </BrowserRouter>
      </Provider>,
    );
    const button = screen.getByTestId('delete-item');
    fireEvent.click(button);
    expect(handleModalClose).toHaveBeenCalledTimes(1);
  });
});
