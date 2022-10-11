import { render, screen } from '@testing-library/react';
import { IGuitar } from '../../types/IGuitars';
import { ProductItem } from './product-item';

const testGuitar: IGuitar = {
  id: '2',
  price: 1000,
  name: 'Test name',
  previewImg: '/public/img/guitar-1.jpg',
  rating: 4,
  vendorCode: 'code',
  description: 'test',
  stringCount: 2,
  type: 'guitar',
};

describe('ProductItem component', () => {
  test('should be rendered correctly', () => {
    render(
      <ProductItem
        guitar={testGuitar}
      />);

    expect(screen.getByText('Test name')).toBeInTheDocument();
  });
});
