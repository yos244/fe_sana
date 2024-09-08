// Card.js
import React from 'react';
import './Card.css';

const Card = ({ imageUrl, itemName, price }) => (
  <div className="card">
    <div
      className="img"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="card-content">
      <h3>{itemName}</h3>
      <p>{price}</p>
    </div>
  </div>
);

export default Card;
