// src/components/CardSlider/CardSlider.js

import React, { useRef, useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CardSlider.css';

function CardSlider({ cards }) {
  const scrollContainerRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  // Function to calculate the scroll distance
  const calculateScrollAmount = () => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const firstCard = scrollContainerRef.current.children[0];
      const cardWidth = firstCard.offsetWidth;
      const computedStyle = window.getComputedStyle(scrollContainerRef.current);
      const gap = parseInt(computedStyle.gap, 10);
      setScrollAmount((cardWidth + gap) * 4); // Scroll by 4 cards
    }
  };

  useEffect(() => {
    calculateScrollAmount();
    window.addEventListener('resize', calculateScrollAmount);
    return () => window.removeEventListener('resize', calculateScrollAmount);
  }, []);

  const scroll = (offset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="card-slider-container">
      <button className="slider-btn prev-btn" onClick={() => scroll(-scrollAmount)}>
        &lt;
      </button>
      <div className="cards-wrapper" ref={scrollContainerRef}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            url={card.url}
          />
        ))}
      </div>
      <button className="slider-btn next-btn" onClick={() => scroll(scrollAmount)}>
        &gt;
      </button>
    </div>
  );
}

export default CardSlider;