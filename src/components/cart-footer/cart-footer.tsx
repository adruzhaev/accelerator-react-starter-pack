import { useSelector } from 'react-redux';
import { getDiscountPercentage, getTotalPrice } from '../../store/cart/selectors';
import { CartOrderAmount } from '../cart-order-amount/cart-order-amount';
import { DiscountPromo } from '../discount-promo/discount-promo';

export function CartFooter() {
  const totalPrice = useSelector(getTotalPrice);
  const discountPercentage = useSelector(getDiscountPercentage);
  const totalPriceAfterDiscount = totalPrice - totalPrice / 100 * discountPercentage;
  const discount = totalPrice / 100 * discountPercentage;

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
