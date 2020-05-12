import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsListItem from './ProductsListItem';
import { Product } from '../product.interface';

export default function ProductsList() {
  const [products, setProducts] = useState<Record<string, Product>>({});

  useEffect(() => {
    axios
      .get<Record<string, Product>>(
        'https://talent-products.firebaseio.com/products.json'
      )
      .then((res) => {
        const { data } = res;
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {Object.entries(products).map((product) => {
          return (
            <li key={product[0]}>
              <ProductsListItem product={product[1]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
