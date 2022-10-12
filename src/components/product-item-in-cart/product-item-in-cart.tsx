import { Icon } from '../icon/icon';
import sprite from '../../assets/sprite.svg';
import { IGuitar } from '../../types/IGuitars';
import { GuitarTypes } from '../../constants/product-types';
import { formatNumberAsCurrency } from '../../helpers/format-number-as-currency';

export function ProductItemInCart(props: {
  guitar: IGuitar
}) {
  const {name, vendorCode, type, stringCount, previewImg, price} = props.guitar;

  return (
    <div className="cart-item">
      <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить">
        <span className="button-cross__icon" />
        <span className="cart-item__close-button-interactive-area" />
      </button>

      <div className="cart-item__image">
        <img src={`/${previewImg}`} width="55" height="130" alt="СURT Z30 Plus" />
      </div>

      <div className="product-info cart-item__info">
        <p className="product-info__title">{name}</p>
        <p className="product-info__info">Артикул: {vendorCode}</p>
        <p className="product-info__info">{GuitarTypes.get(type)}, {stringCount} струнная</p>
      </div>

      <div className="cart-item__price">
        {formatNumberAsCurrency(price)} ₽
      </div>

      <div className="quantity cart-item__quantity">
        <button className="quantity__button" aria-label="Уменьшить количество">
          <Icon width="8" height="2" name={`${sprite}#minus`} />
        </button>

        <input className="quantity__input" type="number" placeholder="1" id="4-count" name="4-count" max="99" />

        <button className="quantity__button" aria-label="Увеличить количество">
          <Icon width="8" height="8" name={`${sprite}#plus`} />
        </button>
      </div>

      <div className="cart-item__price-total">
        34 500 ₽
      </div>
    </div>
  );
}
