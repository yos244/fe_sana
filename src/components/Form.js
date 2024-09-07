import React, { useState } from 'react';
import './Form.css'; // Add your custom styles here

const Form = ({ onCardAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [img_url, setImg_url] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      title,
      description,
      price: parseFloat(price),
      img_url,
    };

    fetch('http://localhost:5038/api/store_db/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCard),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Card added successfully!');
          setTitle('');
          setDescription('');
          setPrice('');
          setImg_url('');
          onCardAdded(); // Notify parent component to refresh
        } else {
          setSuccessMessage('Error adding card. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccessMessage('Error adding card. Please try again.');
      });
  };

  return (
    <div className="form-container">
      <h2>Add a New Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Item Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="img_url">Image URL:</label>
          <input
            type="text"
            id="img_url"
            value={img_url}
            onChange={(e) => setImg_url(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Form;
