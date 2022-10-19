export function AddToCart(props: {
  price: string
  onAddToCartButtonClick: () => void
}) {
  return (
    <div className="product-container__price-wrapper">
      <p className="product-container__price-info product-container__price-info--title">Цена:</p>
      <p className="product-container__price-info product-container__price-info--value">{props.price} ₽</p>

      <button
        className="button button--red button--big product-container__button"
        onClick={props.onAddToCartButtonClick}
      >
        Добавить в корзину
      </button>
    </div>);
}
