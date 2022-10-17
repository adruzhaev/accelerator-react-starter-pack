import { render, screen } from '@testing-library/react';
import { IGuitar } from '../../types/IGuitars';
import { ProductItem } from './product-item';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductItem
            guitar={testGuitar}
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Test name')).toBeInTheDocument();
  });
});
