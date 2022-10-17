import { Cart } from './cart';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';
import { Provider } from 'react-redux';
import { AppRoute } from '../../constants/app-route';

describe('App pages:', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
    store.dispatch = jest.fn();
  });
  test('Cart page route works correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.Cart]}>
          <Cart />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Добавьте товар в корзину.')).toBeInTheDocument();
  });
});
