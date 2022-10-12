import LockFocus from 'react-focus-lock';
import { Icon } from '../icon/icon';
import { Modal } from '../modal/modal';
import sprite from '../../assets/sprite.svg';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/use-outside-click';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';

export function AddToCartSuccessModal(props: {
  isModalShown: boolean
  handleModalClose: () => void
}) {
  const addToCartModalSuccessRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(addToCartModalSuccessRef, props.handleModalClose);

  return (
    <LockFocus>
      <Modal className="modal--success" isModalShown={props.isModalShown} ref={addToCartModalSuccessRef}>
        <Icon className="modal__icon" width="26" height="20" name={`${sprite}#icon-success`} />
        <p className="modal__message">
          Товар успешно добавлен в корзину
        </p>

        <div className="modal__button-container modal__button-container--add">
          <Link
            className="button button--small modal__button"
            to={AppRoute.Basket}
          >
            Перейти в корзину
          </Link>
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
