// CardList.js
import React from 'react';
import Card from './Card';
import './CardList.css';

import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';
import img4 from '../img/4.jpeg';
import img5 from '../img/5.jpeg';
import img6 from '../img/6.jpeg';

const CardList = () => {
  const items = [
    { id: 1, imageUrl: img1, itemName: 'Item 1', price: '$10' },
    { id: 2, imageUrl: img2, itemName: 'Item 2', price: '$20' },
    { id: 3, imageUrl: img3, itemName: 'Item 3', price: '$30' },
    { id: 4, imageUrl: img4, itemName: 'Item 4', price: '$40' },
    { id: 5, imageUrl: img5, itemName: 'Item 5', price: '$50' },
    { id: 6, imageUrl: img6, itemName: 'Item 6', price: '$60' },
  ];

  return (
    <div className="card-list-container">
      {items.map(item => (
        <Card
          key={item.id}
          imageUrl={item.imageUrl}
          itemName={item.itemName}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CardList;
