import React from 'react';
import { useNavigate } from 'react-router-dom';


const MyCourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleGoToCourse = () => {
    console.log(`Going to course: ${course.title}`);
    navigate(`/courses/${course._id}`); // Example: navigates to the detailed course page
  };

  return (
    <div
      className="
        bg-white rounded-xl shadow-md border border-gray-100 // Soft background, refined border/shadow
        flex flex-col
        transform transition-transform duration-300 ease-in-out
        hover:scale-[1.02] hover:shadow-lg // Gentle lift on hover
        cursor-pointer // Indicate clickable
        text-gray-800 // Default text color for good readability
      "
      onClick={handleGoToCourse} // Make the entire card clickable
    >
      {/* Course Image - A featured, slightly framed image */}
      <div className="w-full h-40 overflow-hidden rounded-t-xl bg-gray-50"> {/* Rounded top corners */}
        <img
          src={course.imageURL}
          alt={course.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        {/* Title & Key Details */}
        <div className="mb-4">
          <h3 className="text-base md:text-xl font-bold leading-tight mb-2">
            {course.title}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold text-gray-700">Board:</span> {course.board}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold text-gray-700">Class:</span> {course.class}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-700">Subjects:</span>{' '}
            {course.subjects.slice(0, 2).join(', ')}
            {course.subjects.length > 2 && (
              <span className="ml-1 text-gray-500">+{course.subjects.length - 2} more</span>
            )}
          </p>
        </div>

        {/* "Go to Course" Button - Subtle & inviting */}
        <button
          className="
            w-full bg-blue-100 text-blue-700 font-semibold py-3 rounded-md
            hover:bg-blue-200 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
            text-base // Good size for visibility
          "
        >
          Go to Course
        </button>
      </div>
    </div>
  );
};

export default MyCourseCard;