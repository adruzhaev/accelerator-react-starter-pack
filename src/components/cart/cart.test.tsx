import { BrowserRouter } from 'react-router-dom';
import { Cart } from './cart';
import { render, screen } from '@testing-library/react';

describe('Basket component', () => {
  it('Should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <Cart guitarsQuantity={4} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Перейти в корзину')).toBeInTheDocument();
  });
});
