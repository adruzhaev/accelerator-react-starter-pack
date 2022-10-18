import { Item } from './item/item';

export function CartOrderAmount(props: {
  totalPrice: number
  discount: number
  totalPriceAfterDiscount: number
}) {
  return (
    <div className="cart__total-info">
      <Item title="Всего" amount={props.totalPrice} />
      <Item amountClassName={props.discount > 0 ? 'cart__total-value--bonus' : ''} title="Скидка" amount={props.discount} />
      <Item amountClassName="cart__total-value--payment" title="К оплате" amount={props.totalPriceAfterDiscount} />

      <button className="button button--red button--big cart__order-button">
        Оформить заказ
      </button>
    </div>
  );
}
