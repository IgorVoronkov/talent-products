import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function AddProductForm() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  const product = { title, status };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    axios
      .post('https://talent-products.firebaseio.com/products.json', product)
      .then((res: AxiosResponse<any>) => {
        console.log(res.data);
      });
    e.preventDefault();
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <br />
      <input
        type="text"
        value={status}
        onChange={handleStatusChange}
        placeholder="Status"
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
