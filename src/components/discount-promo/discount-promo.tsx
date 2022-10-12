import { useForm } from '../../hooks/use-form';

export function DiscountPromo() {
  const {values, errors, handleFormSubmit, handleFormChange} = useForm<{coupon: string}>(sendPromoCode, {
    coupon: {required: {value: true, message: 'Заполните поле'}},
  });

  function sendPromoCode() {
    // eslint-disable-next-line no-console
    console.log(values);
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
            errors.coupon &&
            <p className="form-input__message form-input__message--error">Неверный промокод</p>
          }

          {
            !errors.coupon &&
            <p className="form-input__message form-input__message--success">Промокод принят</p>
          }
        </div>

        <button className="button button--big coupon__button" type="submit">Применить</button>
      </form>
    </div>
  );
}
