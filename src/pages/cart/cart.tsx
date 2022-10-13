/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { CartFooter } from '../../components/cart-footer/cart-footer';
import { H2 } from '../../components/h2/h2';
import { ProductItemInCart } from '../../components/product-item-in-cart/product-item-in-cart';
import { AppRoute } from '../../constants/app-route';
import { getGuitarsFromCart } from '../../store/cart/selectors';

const breadcrumbs = [
  {title: 'Главная', link: AppRoute.Home},
  {title: 'Каталог', link: AppRoute.getCatalog('1')},
  {title: 'Корзина', link: ''},
];

export function Cart() {
  const guitars = useSelector(getGuitarsFromCart);

  useEffect(() => {
    document.body.style.overflow = 'visible';
  });

  return (
    <div className="container">
      <H2 title="Корзина" />
      <Breadcrumbs className="breadcrumbs" items={breadcrumbs} />

      <div className="cart">
        {
          guitars.length > 0 && guitars.map((item) => (
            <ProductItemInCart key={item.guitar.id} guitar={item} />
          ))
        }
      </div>

      <CartFooter />
    </div>
  );
}
