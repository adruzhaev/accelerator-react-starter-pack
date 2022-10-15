import cn from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/use-form';
import { getDiscountPercentage } from '../../store/cart/selectors';
import { sendCouponForDiscount } from '../../store/cart/slice';

export function DiscountPromo() {
  const dispatch = useDispatch();
  const [isCouponeSent, setIsCouponSent] = useState(false);
  const discount = useSelector(getDiscountPercentage);
  const {values, handleFormSubmit, handleFormChange} = useForm<{coupon: string}>(sendPromoCode, {
    coupon: {required: {value: true, message: 'Заполните поле'}},
  });

  function sendPromoCode() {
    dispatch(sendCouponForDiscount(values.coupon));
    setIsCouponSent(true);

    setTimeout(() => {
      setIsCouponSent(false);
    }, 3000);
  }

  return (
    <div className="cart__coupon coupon">
      <h2 className="title title--little coupon__title">Промокод на скидку</h2>
      <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>

      <form className="coupon__form" id="coupon-form" method="post" action="/" onSubmit={handleFormSubmit}>
        <div className="form-input coupon__input">
          <label className="visually-hidden">Промокод</label>
          <input
            value={values.coupon || ''}
            onChange={handleFormChange}
            type="text"
            placeholder="Введите промокод"
            id="coupon"
            name="coupon"
          />

          {
            isCouponeSent &&
            <p className={cn('form-input__message', discount ? 'form-input__message--success' : 'form-input__message--error')}>
              {discount > 0 ? 'Промокод принят' : 'Неверный промокод'}
            </p>
          }
        </div>

        <button className="button button--big coupon__button" type="submit">Применить</button>
      </form>
    </div>
  );
}
