import { CartOrderAmount } from '../cart-order-amount/cart-order-amount';
import { DiscountPromo } from '../discount-promo/discount-promo';

export function CartFooter() {
  return (
    <div className="cart__footer">
      <DiscountPromo />

      <CartOrderAmount
        totalPrice={52000}
        discount={3000}
        totalPriceAfterDiscount={49000}
      />
    </div>
  );
}
