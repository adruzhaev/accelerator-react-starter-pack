import { ChangeEventHandler, FocusEventHandler } from 'react';
import { FilterType } from '../filter-type/filter-type';
import { InputPrice } from '../input-price/input-price';

export function PriceFilter(props: {
  onMinPriceChange: ChangeEventHandler<HTMLInputElement>
  onMaxPriceChange: ChangeEventHandler<HTMLInputElement>
  onMinPriceBlur: FocusEventHandler<HTMLInputElement>
  onMaxPriceBlur: FocusEventHandler<HTMLInputElement>
  minPrice: number
  maxPrice: number
  valueMinPrice: string
  valueMaxPrice: string
}) {
  return (
    <FilterType title="Цена, ₽">
      <div className="catalog-filter__price-range">
        <InputPrice
          label="Минимальная цена"
          placeholder={props.minPrice?.toString()}
          id="priceMin"
          name="от"
          onChange={props.onMinPriceChange}
          onBlur={props.onMinPriceBlur}
          min={props.minPrice}
          value={props.valueMinPrice}
        />
        <InputPrice
          label="Максимальная цена"
          placeholder={props.maxPrice?.toString()}
          id="priceMax"
          name="до"
          onChange={props.onMaxPriceChange}
          onBlur={props.onMaxPriceBlur}
          max={props.maxPrice}
          value={props.valueMaxPrice}
        />
      </div>
    </FilterType>
  );
}
