import { render, screen } from '@testing-library/react';
import { CartOrderAmount } from './cart-order-amount';

describe('CartOrderAmount Component', () => {
  test('should be rendered correctly', () => {
    render(
      <CartOrderAmount
        totalPrice={1000}
        discount={10}
        totalPriceAfterDiscount={900}
      />,
    );

    expect(screen.getByText('Оформить заказ')).toBeInTheDocument();
  });
});
