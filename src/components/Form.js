import React, { useState } from 'react';
import './Form.css'; // Add your custom styles here

const Form = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [img_url, setImg_url] = useState(''); // Changed to img_url
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      itemName,
      description,
      price: parseFloat(price), // Ensure price is a number
      img_url, // Changed to img_url
    };

    // POST request to backend API
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
          setItemName('');
          setDescription('');
          setPrice('');
          setImg_url(''); // Reset img_url
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
          <label htmlFor="itemName">Item Title:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
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
            value={img_url} // Changed to img_url
            onChange={(e) => setImg_url(e.target.value)} // Changed to setImg_url
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
