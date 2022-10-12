import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { CartFooter } from '../../components/cart-footer/cart-footer';
import { H2 } from '../../components/h2/h2';
import { ProductItemInCart } from '../../components/product-item-in-cart/product-item-in-cart';
import { AppRoute } from '../../constants/app-route';
import { getFilteredGuitars } from '../../store/guitars/selectors';

const breadcrumbs = [
  {title: 'Главная', link: AppRoute.Home},
  {title: 'Каталог', link: AppRoute.getCatalog('1')},
  {title: 'Корзина', link: ''},
];

export function Cart() {
  // Temporary as adding to cart logic is not implemented yet
  const {data: guitars} = useSelector(getFilteredGuitars);

  useEffect(() => {
    document.body.style.overflow = 'visible';
  });

  return (
    <div className="container">
      <H2 title="Корзина" />
      <Breadcrumbs className="breadcrumbs" items={breadcrumbs} />

      <div className="cart">
        {
          guitars.slice(0, 2).map((item) => (
            <ProductItemInCart key={item.id} guitar={item} />
          ))
        }
      </div>

      <CartFooter />
    </div>
  );
}
