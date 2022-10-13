import LockFocus from 'react-focus-lock';
import { useRef } from 'react';
import { Modal } from '../modal/modal';
import { useOnClickOutside } from '../../hooks/use-outside-click';
import { IGuitar } from '../../types/IGuitars';
import { GuitarTypes } from '../../constants/product-types';
import { formatNumberAsCurrency } from '../../helpers/format-number-as-currency';

export function RemoveFromCartModal(props: {
  isModalShown: boolean
  handleModalClose: () => void
  guitar: IGuitar
}) {
  const {name, vendorCode, type, stringCount, previewImg, price} = props.guitar;
  const removeFromCartModalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(removeFromCartModalRef, props.handleModalClose);

  return (
    <LockFocus>
      <Modal isModalShown={props.isModalShown} ref={removeFromCartModalRef}>
        <h2 className="modal__header title title--medium title--red">
          Удалить этот товар?
        </h2>

        <div className="modal__info">
          <img className="modal__img" src={`/${previewImg}`} width="67" height="137" alt={name} />

          <div className="modal__info-wrapper">
            <h3 className="modal__product-name title title--little title--uppercase">
              {name}
            </h3>
            <p className="modal__product-params modal__product-params--margin-11">
              Артикул: {vendorCode}
            </p>
            <p className="modal__product-params">
              {GuitarTypes.get(type)}, {stringCount} струнная
            </p>
            <p className="modal__price-wrapper">
              <span className="modal__price">Цена:</span>
              <span className="modal__price">{formatNumberAsCurrency(price)} ₽</span>
            </p>
          </div>
        </div>
        <div className="modal__button-container">
          <button className="button button--small modal__button">Удалить товар</button>
          <button
            className="button button--black-border button--small modal__button modal__button--right"
            onClick={props.handleModalClose}
          >
            Продолжить покупки
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
