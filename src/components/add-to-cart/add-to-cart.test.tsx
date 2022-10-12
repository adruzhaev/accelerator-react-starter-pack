import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AddToCart } from './add-to-cart';

describe('AddToCart Component', () => {
  test('should be rendered correctly', () => {
    render(
      <BrowserRouter>
        <AddToCart price='1000' handleAddToCartButtonClick={jest.fn()} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Добавить в корзину')).toBeInTheDocument();
  });
});
