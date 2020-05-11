import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function ProductsList() {
  const [products, setProducts] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get<object>('https://talent-products.firebaseio.com/products.json')
      .then((res: AxiosResponse<object>) => {
        const { data } = res;
        setProducts(Object.values(data));
      });
  }, []);

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {products.map((product: any) => {
          const { title, status } = product;
          return <li>{`${title}: ${status}`}</li>;
        })}
      </ul>
    </div>
  );
}
