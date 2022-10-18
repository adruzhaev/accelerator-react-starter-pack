import cn from 'classnames';
import { formatNumberAsCurrency } from '../../../helpers/format-number-as-currency';

type Titles = 'Всего' | 'Скидка' | 'К оплате'

export function Item(props: {
  title: Titles
  amount: number
  amountClassName?: string
}) {
  return (
    <p className="cart__total-item">
      <span className="cart__total-value-name">
        {props.title}:
      </span>
      <span className={cn('cart__total-value', props.amountClassName)}>
        {props.title === 'Скидка' && props.amount > 0 && '- '}
        {formatNumberAsCurrency(props.amount)} ₽
      </span>
    </p>
  );
}
