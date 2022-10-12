import cn from 'classnames';
import { Button } from '../button/button';
import { Rating } from '../rating/rating';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { useModal } from '../../hooks/use-modal';
import { AddToCartModal } from '../add-to-cart-modal/add-to-cart-modal';
import { IGuitar } from '../../types/IGuitars';
import { AddToCartSuccessModal } from '../add-to-cart-success-modal/add-to-cart-success-modal';

export function ProductItem(props: {
  className?: string,
  guitar: IGuitar
}) {
  const {id, name, price, previewImg, rating, comments} = props.guitar;
  const [isAddToCartModalShown, handleAddToCartModalOpen, handleAddToCartModalClose] = useModal();
  const [isAddToCartSuccessModalShown, handleAddToCartSuccessModalOpen, handleAddToCartSuccessModalClose] = useModal();

  return (
    <div className={cn('product-card', props.className)}>
      <img src={`/${previewImg}`} width="75" height="190" alt={name} />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <Rating rating={rating} />
          <span className="rate__count">{comments?.length}</span><span className="rate__message"></span>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">{price} ₽</p>
      </div>
      <div className="product-card__buttons">
        <Link className="button button--mini" to={`${AppRoute.getGuitar(id)}`}>
          Подробнее
        </Link>

        <Button
          isMiniButton
          title="Купить"
          type="buy"
          onClick={handleAddToCartModalOpen}
        />
      </div>

      {
        isAddToCartModalShown &&
        <AddToCartModal
          isModalShown={isAddToCartModalShown}
          handleModalClose={handleAddToCartModalClose}
          handleAddToCartButtonClick={handleAddToCartSuccessModalOpen}
          guitar={props.guitar}
        />
      }

      {
        isAddToCartSuccessModalShown &&
        <AddToCartSuccessModal
          isModalShown={isAddToCartSuccessModalShown}
          handleModalClose={handleAddToCartSuccessModalClose}
        />
      }
    </div>
  );
}
