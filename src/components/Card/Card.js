import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, content, url }) {
  // Use 'Link' to wrap the card and navigate to a dynamic URL
  const cardPath = `/topics/${url}`;

  return (
    <Link to={cardPath} className="card-link">
      <div className="card">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
        <button className="card-btn">Explore</button>
      </div>
    </Link>
  );
}

export default Card;