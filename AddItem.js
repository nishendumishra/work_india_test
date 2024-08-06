import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ addItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [shipping, setShipping] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      item: name,
      price: parseFloat(price),
      shipping_method: shipping,
      image_url: imageUrl || 'default-image-url', // Set a default image if none is provided
    };
    addItem(newItem);
    setName('');
    setPrice('');
    setShipping('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Item Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />

      <select
        value={shipping}
        onChange={e => setShipping(e.target.value)}
        required
      >
        <option value="" disabled>Select Shipping</option>
        <option value="Same Day Shipping">Same Day Shipping</option>
        <option value="None">None</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItem;
