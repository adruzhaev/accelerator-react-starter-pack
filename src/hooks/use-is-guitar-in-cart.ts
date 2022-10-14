import { useSelector } from 'react-redux';
import { getGuitarsFromCart } from '../store/cart/selectors';

export const useIsGuitarInCart = (id: string) => {
  const guitars = useSelector(getGuitarsFromCart);
  const isGuitarInCart = Boolean(guitars.find((item) => item.guitar.id === id));

  return isGuitarInCart;
};
