import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import AddProductForm from './features/products/AddProductForm';
import ProductsList from './features/products/ProductsList';

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Products list</NavLink>
          </li>
          <li>
            <NavLink to="/add-new-product">Add new product</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="/products">
          <ProductsList />
        </Route>
        <Route path="/add-new-product">
          <AddProductForm />
        </Route>
      </Switch>
    </div>
  );
}
