

import React, { useState, useEffect } from 'react';
import { courseApi } from '../apis/courseApi';
import CourseFilters from './courseComponents/CourseFilters';
import CourseTabs from './courseComponents/CourseTabs';
import CourseCard from './courseComponents/CourseCard';
import Header from './Header';
import './CoursesPage.css';

const CoursesPage = () => {
  // State management
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filter states
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  
  // Tab state
  const [activeTab, setActiveTab] = useState('all');

  // Fetch courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const coursesData = await courseApi.getAllCourses();
        setAllCourses(coursesData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch courses. Please try again later.');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Filter courses based on selected filters and active tab
  useEffect(() => {
    let filtered = [...allCourses];

    // Apply tab filter first
    if (activeTab !== 'all') {
      filtered = filtered.filter(course => course.type === activeTab);
    }

    // Apply board filter
    if (selectedBoard) {
      filtered = filtered.filter(course => 
        course.board.toLowerCase() === selectedBoard.toLowerCase()
      );
    }

    // Apply class filter
    if (selectedClass) {
      filtered = filtered.filter(course => 
        course.class === parseInt(selectedClass)
      );
    }

    // Apply subject filter
    if (selectedSubject) {
      filtered = filtered.filter(course => 
        course.subjects.some(subject => 
          subject.toLowerCase() === selectedSubject.toLowerCase()
        )
      );
    }

    setFilteredCourses(filtered);
  }, [allCourses, activeTab, selectedBoard, selectedClass, selectedSubject]);

  // Calculate course counts for tabs
  const getCourseCounts = () => {
    const counts = {
      all: allCourses.length,
      class: allCourses.filter(course => course.type === 'class').length,
      subject: allCourses.filter(course => course.type === 'subject').length,
      monthly: allCourses.filter(course => course.type === 'monthly').length
    };
    return counts;
  };

  // Get current tab title
  const getCurrentTabTitle = () => {
    switch (activeTab) {
      case 'all': return 'All Courses';
      case 'class': return 'Class Courses';
      case 'subject': return 'Subject Courses';
      case 'monthly': return 'Monthly Plans';
      default: return 'Courses';
    }
  };

  if (loading) {
    return (
      <div className="courses-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading courses...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="courses-page">
        <div className="container">
          <div className="error-state">
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <button 
              className="retry-btn" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-page">
    <Header />
      <div className="container ml-0 sm:ml-[10px] md:ml-[40px] lg:ml-[80px]">
        {/* Page Header */}
        <div class="py-6">
          <h1 class="text-2xl md:text-3xl font-bold text-gray-900 py-2">Explore Courses</h1>
          <p class="mt-2 text-lg text-gray-600">Choose from a wide range of courses designed to enhance your understanding of core concepts.</p>
        </div>


        {/* Filters */}
        <CourseFilters
          courses={allCourses}
          selectedBoard={selectedBoard}
          selectedClass={selectedClass}
          selectedSubject={selectedSubject}
          onBoardChange={setSelectedBoard}
          onClassChange={setSelectedClass}
          onSubjectChange={setSelectedSubject}
        />

        {/* Course Tabs */}
        <CourseTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          courseCounts={getCourseCounts()}
        />
        {/* Courses Section */}
        <div className="courses-section">
          <div className="section-header">
            <h2>{getCurrentTabTitle()}</h2>
            <span className="course-count">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No courses found</h3>
              <p>Try adjusting your filters to see more courses.</p>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;