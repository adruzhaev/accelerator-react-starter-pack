import { AddToCart } from '../../components/add-to-cart/add-to-cart';
import { ProductDetails } from '../../components/product-details/product-details';
import { Review } from '../../components/review/review';
import { fetchGuitarById } from '../../store/guitars/slice';
import { getGuitarById } from '../../store/guitars/selectors';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { H2 } from '../../components/h2/h2';
import { AppRoute } from '../../constants/app-route';
import { formatNumberAsCurrency } from '../../helpers/format-number-as-currency';
import { IComment } from '../../types/IComment';
import { AddReviewModal } from '../../components/add-review-modal/add-review-modal';
import { useModal } from '../../hooks/use-modal';
import { SuccessReviewModal } from '../../components/success-review-modal/success-review-modal';
import { AddToCartModal } from '../../components/add-to-cart-modal/add-to-cart-modal';
import { AddToCartSuccessModal } from '../../components/add-to-cart-success-modal/add-to-cart-success-modal';
import { useIsGuitarInCart } from '../../hooks/use-is-guitar-in-cart';

const getBreadcrumbsItems = (guitarName = 'guitar') => [
  {title: 'Главная', link: AppRoute.Home},
  {title: 'Каталог', link: AppRoute.getCatalog('1')},
  {title: guitarName, link: ''},
];

const REVIEWS_TO_SHOW = 3;

export function Guitar() {
  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();
  const [reviewsToShow, setReviewsToShow] = useState(REVIEWS_TO_SHOW);
  const [isAddReviewModalShown, handleAddReviewModalOpen, handleAddReviewModalClose] = useModal();
  const [isSuccessReviewModalShown, handleSuccessReviewModalOpen, handleSuccessReviewModalClose] = useModal();
  const [isAddToCartModalShown, handleAddToCartModalOpen, handleAddToCartModalClose] = useModal();
  const [isAddToCartSuccessModalShown, handleAddToCartSuccessModalOpen, handleAddToCartSuccessModalClose] = useModal();
  const {data: guitar, loading} = useSelector(getGuitarById);
  const breadcrumbs = getBreadcrumbsItems(guitar.name);
  const isGuitarInCart = useIsGuitarInCart(guitar.id);

  const showMoreReviewsClickHandler = () => {
    setReviewsToShow(reviewsToShow + REVIEWS_TO_SHOW);
  };

  useEffect(() => {
    dispatch(fetchGuitarById(id));
  }, [dispatch, id]);

  return (
    <div className="container">
      <H2 title="Товар" />
      <Breadcrumbs className="breadcrumbs" items={breadcrumbs} />

      {
        loading === 'idle' &&
        <div className="product-container">
          <img className="product-container__img" src={`/${guitar.previewImg}`} width="90" height="235" alt="" />

          <ProductDetails
            name={guitar.name}
            description={guitar.description}
            rating={guitar.rating}
            vendorCode={guitar.vendorCode}
            type={guitar.type}
            stringCount={guitar.stringCount}
            commentsCount={guitar.comments?.length as number}
          />

          <AddToCart
            price={formatNumberAsCurrency(guitar.price).toString()}
            onAddToCartButtonClick={handleAddToCartModalOpen}
          />
        </div>
      }


      <section className="reviews">
        <h3 className="reviews__title title title--bigger">Отзывы</h3>
        <button
          className="button button--red-border button--big reviews__submit-button"
          onClick={handleAddReviewModalOpen}
        >
          Оставить отзыв
        </button>

        {
          loading === 'idle' && guitar.comments !== undefined &&
          guitar.comments
            .slice()
            .sort((a: IComment, b: IComment) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime())
            .slice(0, reviewsToShow)
            .map((item) => (
              <Review
                key={item.id}
                authorName={item.userName}
                date={new Date(item.createAt)}
                rating={item.rating}
                advantages={item.advantage}
                disadvantages={item.disadvantage}
                comment={item.comment}
              />
            ))
        }

        {
          guitar.comments && reviewsToShow <= guitar.comments.length &&
          <button
            className="button button--medium reviews__more-button"
            onClick={showMoreReviewsClickHandler}
          >
            Показать еще отзывы
          </button>
        }
        <a
          className="button button--up button--red-border button--big reviews__up-button"
          href={`${AppRoute.getGuitar(guitar.id)}#header`}
          style={{zIndex: 1}}
        >
          Наверх
        </a>
      </section>

      {
        isAddReviewModalShown &&
        <AddReviewModal
          isModalShown={isAddReviewModalShown}
          onModalClose={handleAddReviewModalClose}
          onReviewFormSend={(): void => {
            handleAddReviewModalClose();
            handleSuccessReviewModalOpen();
          }}
          guitarName={guitar.name}
          guitarId={Number(guitar.id)}
        />
      }

      {
        isSuccessReviewModalShown &&
        <SuccessReviewModal
          isModalShown={isSuccessReviewModalShown}
          onModalClose={handleSuccessReviewModalClose}
        />
      }

      {
        isAddToCartModalShown &&
        <AddToCartModal
          isGuitarInCart={isGuitarInCart}
          guitar={guitar}
          isModalShown={isAddToCartModalShown}
          onModalClose={handleAddToCartModalClose}
          onAddToCartButtonClick={handleAddToCartSuccessModalOpen}
        />
      }

      {
        isAddToCartSuccessModalShown &&
        <AddToCartSuccessModal
          isModalShown={isAddToCartSuccessModalShown}
          onModalClose={handleAddToCartSuccessModalClose}
          isContinueOnCatalog
        />
      }
    </div>
  );
}
