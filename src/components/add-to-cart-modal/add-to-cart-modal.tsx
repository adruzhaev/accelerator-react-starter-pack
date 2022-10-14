import LockFocus from 'react-focus-lock';
import { Modal } from '../modal/modal';
import { IGuitar } from '../../types/IGuitars';
import { formatNumberAsCurrency } from '../../helpers/format-number-as-currency';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/use-outside-click';
import { GuitarTypes } from '../../constants/product-types';
import { useDispatch } from 'react-redux';
import { addToCart, incrementGuitarQuantity } from '../../store/cart/slice';

export function AddToCartModal(props: {
  isModalShown: boolean
  handleModalClose: () => void
  handleAddToCartButtonClick: () => void
  guitar: IGuitar
  isGuitarInCart: boolean
}) {
  const dispatch = useDispatch();
  const addToCartModalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(addToCartModalRef, props.handleModalClose);

  const handleAddToCartCLick = () => {
    if (props.isGuitarInCart) {


      dispatch(incrementGuitarQuantity(props.guitar.id));
    } else {

      dispatch(addToCart({guitar: props.guitar, quantity: 1}));
    }

    props.handleAddToCartButtonClick();
    props.handleModalClose();
  };

  return (
    <LockFocus>
      <Modal isModalShown={props.isModalShown} ref={addToCartModalRef}>
        <h2 className="modal__header title title--medium">
          Добавить товар в корзину
        </h2>

        <div className="modal__info">
          <img className="modal__img" src={`/${props.guitar.previewImg}`} style={{width: '67px', height: '137px'}} width="67" height="137" alt={props.guitar.name} />

          <div className="modal__info-wrapper">
            <h3 className="modal__product-name title title--little title--uppercase">
              Гитара {props.guitar.name}
            </h3>
            <p className="modal__product-params modal__product-params--margin-11">
              Артикул: {props.guitar.vendorCode}
            </p>
            <p className="modal__product-params">
              {GuitarTypes.get(props.guitar.type)}, {props.guitar.stringCount} струнная
            </p>
            <p className="modal__price-wrapper">
              <span className="modal__price">Цена:</span>
              <span className="modal__price">{formatNumberAsCurrency(props.guitar.price)} ₽</span>
            </p>
          </div>
        </div>
        <div className="modal__button-container">
          <button
            className="button button--red button--big modal__button modal__button--add"
            onClick={handleAddToCartCLick}
          >
            Добавить в корзину
          </button>
        </div>

        <button
          className="modal__close-btn button-cross"
          onClick={props.handleModalClose}
          type="button"
          aria-label="Закрыть"
        >
          <span className="button-cross__icon" />
          <span className="modal__close-btn-interactive-area" />
        </button>
      </Modal>
    </LockFocus>
  );
}
