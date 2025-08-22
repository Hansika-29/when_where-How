import React from 'react';
import './StudiedTopicsPage.css';

function StudiedTopicsPage() {
  const studiedTopics = ['The Renaissance', 'Political systems', 'World geography', 'Ancient Greece'];

  return (
    <div className="studied-topics-page">
      <h1>Studied Topics</h1>
      <p>Here is a list of all the topics you have marked as studied.</p>
      <ul>
        {studiedTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudiedTopicsPage;