import React, { useState, useEffect } from 'react';
import './CardList.css'; // Import your CSS file


const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5038/api/store_db/cards') // Fetch from backend API
      .then(response => response.json())
      .then(data => {
        console.log('Fetched cards:', data); // For debugging
        setCards(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="card-list">
      {cards.map(card => (
        <div key={card._id} className="card">
          <img src={card.imageUrl} alt={card.itemName} />
          <h2>{card.title}</h2>
          <p>SYP {card.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
