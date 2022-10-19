import { ChangeEvent } from 'react';
import { Icon } from '../icon/icon';
import { GuitarTypes } from '../../constants/product-types';
import { formatNumberAsCurrency } from '../../helpers/format-number-as-currency';
import { ICartItem } from '../../types/ICart';
import { useModal } from '../../hooks/use-modal';
import { RemoveFromCartModal } from '../remove-from-cart-modal/remove-from-cart-modal';
import { useDispatch } from 'react-redux';
import { incrementGuitarQuantity, decrementGuitarQuantity, changeGuitarInputQuantity } from '../../store/cart/slice';
import sprite from '../../assets/sprite.svg';

export function ProductItemInCart(props: {
  guitar: ICartItem
}) {
  const dispatch = useDispatch();
  const {id, name, vendorCode, type, stringCount, previewImg, price} = props.guitar.guitar;
  const {quantity} = props.guitar;
  const [isRemoveFromCartModalShown, handleRemoveFromCartModalOpen, handleRemoveFromCartModalClose] = useModal();

  const handleGuitarCountDecrement = () => {
    if (quantity === 1) {
      handleRemoveFromCartModalOpen();
    } else {
      dispatch(decrementGuitarQuantity(id));
    }
  };

  const handleGuitarCountIncrement = () => {
    dispatch(incrementGuitarQuantity(id));
  };

  const handleInputPriceChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value === '') {
      handleRemoveFromCartModalOpen();
    }

    dispatch(changeGuitarInputQuantity({id, value: evt.target.value}));
  };

  return (
    <div className="cart-item">
      <button
        className="cart-item__close-button button-cross"
        onClick={handleRemoveFromCartModalOpen}
        type="button"
        aria-label="Удалить"
        data-testid="delete-item"
      >
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
        <button
          className="quantity__button"
          onClick={handleGuitarCountDecrement}
          aria-label="Уменьшить количество"
        >
          <Icon width="8" height="2" name={`${sprite}#minus`} />
        </button>

        <input className="quantity__input" value={quantity} onChange={handleInputPriceChange} type="number" placeholder="1" id="4-count" name="4-count" max="99" />

        <button
          className="quantity__button"
          onClick={handleGuitarCountIncrement}
          aria-label="Увеличить количество"
        >
          <Icon width="8" height="8" name={`${sprite}#plus`} />
        </button>
      </div>

      <div className="cart-item__price-total">
        {formatNumberAsCurrency(price * quantity)} ₽
      </div>

      {
        isRemoveFromCartModalShown &&
        <RemoveFromCartModal
          guitar={props.guitar.guitar}
          isModalShown={isRemoveFromCartModalShown}
          onModalClose={handleRemoveFromCartModalClose}
        />
      }
    </div>
  );
}
