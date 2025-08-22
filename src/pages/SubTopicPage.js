// src/pages/SubTopicPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ancientIndiaData from '../data/ancientIndiaData';
import './SubTopicPage.css';

function SubTopicPage() {
  const { topicName, subTopicName } = useParams();
  const topic = ancientIndiaData.find(t => t.url === topicName);

  if (!topic) {
    return <div className="subtopic-page"><h1>Topic Not Found</h1></div>;
  }

  const subtopic = topic.subtopics.find(s => s.label.toLowerCase().replace(/ /g, '-') === subTopicName);

  if (!subtopic) {
    return <div className="subtopic-page"><h1>Subtopic Not Found</h1></div>;
  }

  // Placeholder content based on the subtopic label
  const content = {
    'phases-in-the-palaeolithic-age': 'Detailed information about the different phases of the Palaeolithic Age, including the Lower, Middle, and Upper Palaeolithic periods, as described in the book.',
    'chalcolithic-settlements': 'Details on the location and characteristics of chalcolithic settlements in India.',
    'harappan-script': 'Information on the undeciphered script of the Indus Valley Civilization.',
    // Add more content for other sections as you extract it from the book
  };

  return (
    <div className="subtopic-page">
      <h1>{topic.title} - {subtopic.label}</h1>
      <p>{content[subTopicName] || 'Detailed content for this subtopic is not yet available.'}</p>
    </div>
  );
}

export default SubTopicPage;