import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import StudiedTopicsPage from './pages/StudiedTopicsPage';
import TopicPage from './pages/TopicPage';
import SubTopicPage from './pages/SubTopicPage';
import NotesPage from './pages/NotesPage'; // Import the new NotesPage
import './App.css';

function App() {
  return (
    <div className="homepage-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/studied-topics" element={<StudiedTopicsPage />} />
          <Route path="/topics/:topicName" element={<TopicPage />} />
          <Route path="/topics/:topicName/:subTopicName" element={<SubTopicPage />} />
          <Route path="/notes" element={<NotesPage />} /> {/* Use the new component */}
          <Route path="/quizzes" element={<div><h1>Quizzes Page</h1></div>} />
          <Route path="/flowcharts" element={<div><h1>Flowcharts Page</h1></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App