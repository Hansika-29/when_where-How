// src/pages/NotesPage.js

import React, { useState } from 'react';
import './NotesPage.css';

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e) => {
    e.preventDefault();
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote(''); // Clear the input field
    }
  };

  return (
    <div className="notes-page">
      <h1>My Notes</h1>
      <p>Add and manage your personal notes here.</p>

      {/* Form to add a new note */}
      <form onSubmit={handleAddNote} className="note-form">
        <textarea
          className="note-input"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write a new note..."
          rows="5"
        />
        <button type="submit" className="add-note-btn">
          Add Note
        </button>
      </form>

      {/* Display the list of notes */}
      <div className="notes-list-container">
        {notes.length > 0 ? (
          <ul className="notes-list">
            {notes.map((note, index) => (
              <li key={index} className="note-item">
                {note}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-notes-message">You don't have any notes yet. Start writing!</p>
        )}
      </div>
    </div>
  );
}

export default NotesPage;