import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../store/cart/selectors';
import { CartOrderAmount } from '../cart-order-amount/cart-order-amount';
import { DiscountPromo } from '../discount-promo/discount-promo';

export function CartFooter() {
  const totalPrice = useSelector(getTotalPrice);
  const discount = 0;
  const totalPriceAfterDiscount = totalPrice - discount;

  return (
    <div className="cart__footer">
      <DiscountPromo />

      <CartOrderAmount
        totalPrice={totalPrice}
        discount={discount}
        totalPriceAfterDiscount={totalPriceAfterDiscount}
      />
    </div>
  );
}
