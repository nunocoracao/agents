import React from 'react';
import Card from './Card';

const List = ({ title, cards }) => {
  return (
    <div className="list">
      <div className="list-header">
        <div className="list-title">{title}</div>
        <button className="list-menu">•••</button>
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            metadata={card.metadata}
          />
        ))}
      </div>
      <button className="add-card-btn">+ Add a card</button>
    </div>
  );
};

export default List;