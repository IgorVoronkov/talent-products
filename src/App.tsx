import React from 'react';
import AddProductForm from './features/products/AddProductForm';
import ProductsList from './features/products/ProductsList';

export default function App() {
  return (
    <div>
      <AddProductForm />
      <hr />
      <ProductsList />;
    </div>
  );
}
