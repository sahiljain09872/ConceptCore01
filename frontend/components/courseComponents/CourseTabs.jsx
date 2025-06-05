// src/components/CourseTabs.jsx

import React from 'react';
import './styles/CourseTabs.css';

const CourseTabs = ({ activeTab, onTabChange, courseCounts }) => {
  const tabs = [
    { id: 'all', label: 'All Courses', count: courseCounts.all },
    { id: 'class', label: 'Class Courses', count: courseCounts.class },
    { id: 'subject', label: 'Subject Courses', count: courseCounts.subject },
    { id: 'monthly', label: 'Monthly Plans', count: courseCounts.monthly }
  ];

  return (
    <div className="course-tabs">
        <h1 className=' text-2xl md:text-3xl category'> Category </h1>
      <div className="tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseTabs;