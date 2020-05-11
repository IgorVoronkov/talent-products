import React, { useState, ChangeEvent } from 'react';

export default function AddProductForm() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return (
    <form>
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
