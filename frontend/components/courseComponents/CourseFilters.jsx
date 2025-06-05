import React from 'react';
import './styles/CourseFilters.css';

const CourseFilters = ({
  courses,
  selectedBoard,
  selectedClass,
  selectedSubject, // Re-added
  onBoardChange,
  onClassChange,
  onSubjectChange // Re-added
}) => {
  // Extract unique values from courses
  const getUniqueBoards = () => {
    const boards = [...new Set(courses.map(course => course.board))];
    return boards.sort();
  };

  const getUniqueClasses = () => {
    const classes = [...new Set(courses.map(course => course.class))];
    return classes.sort((a, b) => a - b);
  };

  // Re-added getUniqueSubjects
  const getUniqueSubjects = () => {
    const subjects = new Set();
    courses.forEach(course => {
      course.subjects.forEach(subject => subjects.add(subject));
    });
    return [...subjects].sort();
  };

  const clearFilters = () => {
    onBoardChange('');
    onClassChange('');
    onSubjectChange(''); // Re-added for Subject filter
  };

  const hasActiveFilters = selectedBoard || selectedClass || selectedSubject; // Re-added selectedSubject check

  return (
    <div className="course-filters">
      <div className="filters-header">
        <h3>Filters</h3>
        {hasActiveFilters && (
          <button className="clear-filters-btn" onClick={clearFilters}>
            Clear All
          </button>
        )}
      </div>

      {/* Class Filter Buttons */}
      <div className="filter-row">
        {getUniqueClasses().map(classNum => (
          <button
            key={`class-${classNum}`}
            className={`filter-button ${selectedClass === classNum ? 'selected' : ''}`}
            onClick={() => onClassChange(selectedClass === classNum ? '' : classNum)} // Toggle selection
          >
            Class {classNum}
          </button>
        ))}
      </div>

      {/* Board Filter Buttons */}
      <div className="filter-row">
        {getUniqueBoards().map(board => (
          <button
            key={`board-${board}`}
            className={`filter-button ${selectedBoard === board ? 'selected' : ''}`}
            onClick={() => onBoardChange(selectedBoard === board ? '' : board)} // Toggle selection
          >
            Board: {board.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Subject Filter (Re-added as a styled select dropdown) */}
      <div className="filter-group"> {/* Using filter-group for the dropdown */}
        <label htmlFor="subject-select">Subject</label>
        <select
          id="subject-select"
          value={selectedSubject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="filter-select"
        >
          <option value="">All Subjects</option>
          {getUniqueSubjects().map(subject => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="active-filters">
          <span className="active-filters-label">Active filters:</span>
          <div className="active-filter-tags">
            {selectedBoard && (
              <span className="filter-tag">
                {selectedBoard.toUpperCase()}
                <button onClick={() => onBoardChange('')}>×</button>
              </span>
            )}
            {selectedClass && (
              <span className="filter-tag">
                Class {selectedClass}
                <button onClick={() => onClassChange('')}>×</button>
              </span>
            )}
            {selectedSubject && ( // Re-added subject display
              <span className="filter-tag">
                {selectedSubject}
                <button onClick={() => onSubjectChange('')}>×</button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseFilters;