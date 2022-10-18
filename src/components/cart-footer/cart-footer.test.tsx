import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CartFooter } from './cart-footer';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';

describe('CartFooter Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartFooter />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Промокод на скидку')).toBeInTheDocument();
  });
});
