import { render, screen } from '@testing-library/react';
import { PriceFilter } from './price-filter';

describe('PriceFilter component', () => {
  test('should be rendered correctly', () => {
    render(
      <PriceFilter
        onMinPriceChange={jest.fn()}
        onMaxPriceChange={jest.fn()}
        onMaxPriceBlur={jest.fn()}
        onMinPriceBlur={jest.fn()}
        minPrice={100}
        maxPrice={1000}
        valueMaxPrice="100"
        valueMinPrice="10"
      />);
    expect(screen.getByText('Цена, ₽')).toBeInTheDocument();
  });
});
