import React from 'react';
import SubjectSection from '../SubjectSection/SubjectSection';
import './MainContent.css';
import ancientIndiaData from '../../data/ancientIndiaData';

// Combine all your subject data into one array
const data = [
  {
    title: 'History',
    cards: ancientIndiaData.map(topic => ({
      ...topic,
      url: topic.url,
      type: 'history'
    })),
  },
  {
    title: 'Geography',
    cards: [
      { title: 'Physical Geography', content: 'Learn about landscapes, climates, and ecosystems of our planet.', url: 'physical-geography', type: 'geography' },
      { title: 'Human Geography', content: 'Discover population, urban, and economic patterns across the globe.', url: 'human-geography', type: 'geography' },
    ],
  },
  {
    title: 'Politics',
    cards: [
      { title: 'Political Systems', content: 'Compare different forms of government, from democracies to monarchies.', url: 'political-systems', type: 'politics' },
      { title: 'International Relations', content: 'Understand diplomacy, conflicts, and global cooperation.', url: 'international-relations', type: 'politics' },
      { title: 'Political Philosophy', content: 'Dive into the ideas of major thinkers like Plato and Machiavelli.', url: 'political-philosophy', type: 'politics' },
    ],
  },
];

function MainContent() {
  return (
    <main className="main-content">
      {data.map((section, index) => (
        <SubjectSection key={index} title={section.title} cards={section.cards} />
      ))}
    </main>
  );
}

export default MainContent;