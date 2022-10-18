import cn from 'classnames';
import { InputSearch } from '../input-search/input-search';
import { Logo } from '../logo/logo';
import { Cart } from '../cart/cart';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import { useSelector } from 'react-redux';
import { getGuitarsQuantityFromCart } from '../../store/cart/selectors';

const LINKS = [
  {
    id: 'catalog',
    title: 'Каталог',
    link: AppRoute.getCatalog('1'),
  },
  {
    id: 'address',
    title: 'Где купить?',
    link: AppRoute.Address,
  },
  {
    id: 'about',
    title: 'О компании',
    link: AppRoute.About,
  },
];

export function Header(props: {
    className?: string
}) {
  const location = useLocation();
  const guiatarsQuantity = useSelector(getGuitarsQuantityFromCart);

  return (
    <header className={cn('header', props.className)} id="header">
      <div className="container header__wrapper">
        <Logo />

        <nav className="main-nav">
          <ul className="main-nav__list">
            {LINKS.map((item) => (
              <li key={item.title}>
                <Link
                  className={cn('link main-nav__link', {'link--current': item.link === location.pathname})}
                  to={item.link}
                  data-testid={`nav-links-${item.id}`}
                >
                  {item.title}
                </Link>
              </li>))}
          </ul>
        </nav>

        <InputSearch />
        <Cart guitarsQuantity={guiatarsQuantity}/>
      </div>
    </header>);
}
