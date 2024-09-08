import React, { useState, useEffect } from 'react';
import './CardList.css'; // Import your CSS file

const CardList = ({ refresh }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch card data from the API
    fetch('http://localhost:5038/api/store_db/cards')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched cards:', data); // For debugging
        setCards(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [refresh]); // Re-fetch cards when the `refresh` prop changes

  return (
    <div className="card-list">
      {cards.map(card => (
        // Use `card.id` as the unique key instead of MongoDB's `_id`
        <div key={card.id} className="card">
          <img className='image' src={card.img_url} alt={card.title} />
          <h2>{card.title}</h2>
          <p>$ {card.price}</p>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
