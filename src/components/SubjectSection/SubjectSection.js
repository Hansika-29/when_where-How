// src/components/SubjectSection/SubjectSection.js

import React from 'react';
import CardSlider from '../CardSlider/CardSlider'; // Import the new component
import './SubjectSection.css';

function SubjectSection({ title, cards }) {
  return (
    <section className="subject-section">
      <h2 className="section-title">{title}</h2>
      <CardSlider cards={cards} />
    </section>
  );
}

export default SubjectSection;