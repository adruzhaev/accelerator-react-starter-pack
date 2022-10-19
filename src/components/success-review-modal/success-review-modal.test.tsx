import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SuccessReviewModal } from './success-review-modal';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';

const handleModalClose = jest.fn();

describe('SuccessReviewModal Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuccessReviewModal
            isModalShown
            onModalClose={handleModalClose}
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Спасибо за ваш отзыв!')).toBeInTheDocument();
  });

  test('should clicked once', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SuccessReviewModal
            isModalShown
            onModalClose={handleModalClose}
          />
        </BrowserRouter>
      </Provider>,
    );
    const button = screen.getByTestId('close-modal');
    fireEvent.click(button);
    expect(handleModalClose).toHaveBeenCalledTimes(1);
  });
});
