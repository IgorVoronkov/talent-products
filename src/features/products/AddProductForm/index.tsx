import React from 'react';

export default function AddProductForm() {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <br />
      <input type="text" placeholder="Status" />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
