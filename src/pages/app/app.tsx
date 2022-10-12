import { Catalog } from '../catalog/catalog';
import { Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../constants/app-route';
import {NotImplemented} from '../../components/not-implemented/not-implemented';
import { NotFound } from '../not-found/not-found';
import { Guitar } from '../guitar/guitar';
import { Layout } from '../../components/layout/layout';
import { Cart } from '../../components/cart/cart';

function App(): JSX.Element {
  return (
    <Layout>
      <Switch>
        <Route path={`${AppRoute.getCatalog()}`} component={Catalog} />

        <Route path={`${AppRoute.getGuitar()}`} component={Guitar} />

        <Route path={`${AppRoute.Cart}`} component={Cart} />

        <Route path={AppRoute.Address}>
          <NotImplemented text='Address' />
        </Route>

        <Route path={AppRoute.About}>
          <NotImplemented text='About' />
        </Route>

        <Route exact path={AppRoute.Home}>
          <NotImplemented text='Main' />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
