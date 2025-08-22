import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ancientIndiaData from '../data/ancientIndiaData';
import './TopicPage.css';

function TopicPage() {
    const { topicName } = useParams();
    const topic = ancientIndiaData.find(t => t.url === topicName);

    if (!topic) {
        return <div className="topic-page"><h1>Topic Not Found</h1></div>;
    }

    return (
        <div className="topic-page">
            <div className="left-column">
                <h1>{topic.title}</h1>
                <div className="subtopics-container">
                    {topic.subtopics.map((subtopic, index) => (
                        <div key={index} className="subtopic-label">
                            {subtopic.sections ? (
                                <Link to={`/topics/${topicName}/${subtopic.label.toLowerCase().replace(/ /g, '-')}`} className="subtopic-link">
                                    {subtopic.label}
                                </Link>
                            ) : (
                                <span>{subtopic.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="right-column">
                {/* Add a brief description or image here */}
                <h2>Introduction</h2>
                <p>{topic.content}</p>
                {/* You can add more dynamic content here based on the selected topic */}
            </div>
        </div>
    );
}

export default TopicPage;