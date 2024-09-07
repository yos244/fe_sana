import React, { useState, useEffect } from 'react';
import './CardList.css'; // Import your CSS file

const CardList = ({ refresh }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5038/api/store_db/cards')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched cards:', data); // For debugging
        setCards(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [refresh]); // Re-fetch cards when refresh changes

  return (
    <div className="card-list">
      {cards.map(card => (
        <div key={card._id} className="card">
          <img src={card.img_url} alt={card.title} />
          <h2>{card.title}</h2>
          <p>${card.price}</p>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
