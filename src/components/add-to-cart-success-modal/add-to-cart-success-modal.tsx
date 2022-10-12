import LockFocus from 'react-focus-lock';
import { Icon } from '../icon/icon';
import { Modal } from '../modal/modal';
import sprite from '../../assets/sprite.svg';
import { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/use-outside-click';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { useHistory } from 'react-router-dom';

export function AddToCartSuccessModal(props: {
  isModalShown: boolean
  handleModalClose: () => void
  isContinueOnCatalog?: boolean
}) {
  const history = useHistory();
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
          <button
            className="button button--small modal__button"
            onClick={() => {
              props.handleModalClose();
              history.push(AppRoute.Cart);
            }}
          >
            Перейти в корзину
          </button>
          {
            !props.isContinueOnCatalog &&
            <button
              className="button button--black-border button--small modal__button modal__button--right"
              onClick={props.handleModalClose}
            >
              Продолжить покупки
            </button>
          }

          {
            props.isContinueOnCatalog &&
            <Link
              className="button button--black-border button--small modal__button modal__button--right"
              to={AppRoute.getCatalog('1')}
            >
              Продолжить покупки
            </Link>
          }
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
