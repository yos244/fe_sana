import React, { useState, useEffect } from 'react';
import './CardList.css'; // Import your CSS file

const CardList = ({ refresh }) => {
  const [cards, setCards] = useState([]);
  const [expandedCardId, setExpandedCardId] = useState(null);

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

  // Function to handle card deletion
  const handleDelete = async (cardId) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      try {
        const response = await fetch(`http://localhost:5038/api/store_db/cards/${cardId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Remove the deleted card from the UI
          setCards(cards.filter(card => card.id !== cardId));
          console.log('Card deleted successfully:', cardId);
        } else {
          console.error('Error deleting card:', cardId);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Function to toggle description visibility
  const toggleDescription = (cardId) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  return (
    <div className="card-list">
      {cards.map(card => (
        <div key={card.id} className="card">
          {/* Delete button */}
          <button className="delete-btn" onClick={() => handleDelete(card.id)}>
            🗑️
          </button>
          <div className="img-container">
            <img className='image' src={card.img_url} alt={card.title} />
          </div>
          <h2>{card.title}</h2>
          <p>$ {card.price}</p>
          <div className="description-container">
            <button 
              className="show-more-btn" 
              onClick={() => toggleDescription(card.id)}
            >
              {expandedCardId === card.id ? '▲ Show less' : '► Show more'}
            </button>
            <p className={`description ${expandedCardId === card.id ? 'expanded' : 'collapsed'}`}>
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
