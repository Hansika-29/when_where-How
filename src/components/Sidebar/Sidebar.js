import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const sidebarItems = [
    { name: 'My Notes', link: '/notes' },
    { name: 'Quizzes', link: '/quizzes' },
    { name: 'Flowcharts', link: '/flowcharts' },
    { name: 'Studied Topics', link: '/studied-topics' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h2>My Dashboard</h2>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;