import React from 'react';
import backCard from './Cards/back.png';
import './stylecard.css';

export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleCLick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="front of card" />
        <img
          className="back"
          src={backCard}
          onClick={handleCLick}
          alt="back of card"
        />
      </div>
    </div>
  );
}
