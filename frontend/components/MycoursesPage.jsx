// // src/pages/MyCoursesPage.jsx
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext'; // Adjust path if needed
// import { useNavigate } from 'react-router-dom';
// import { fetchMyCoursesApi } from '../apis/courses'; // Import the new API function

// const MyCoursesPage = () => {
//   const { user, authLoading } = useAuth();
//   const navigate = useNavigate();

//   const [myCourses, setMyCourses] = useState([]);
//   const [coursesLoading, setCoursesLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // If auth is still loading, wait.
//     if (authLoading) {
//       return;
//     }

//     // If user is not authenticated after authLoading is false, redirect to home/login
//     if (!user) {
//       navigate('/'); // Or navigate('/login');
//       return;
//     }

//     const loadMyCourses = async () => {
//       setCoursesLoading(true);
//       setError(null);
//       try {
//         const token = localStorage.getItem('token');
//         const result = await fetchMyCoursesApi(token);

//         if (result.success) {
//           setMyCourses(result.courses);
//         } else {
//           setError(result.message || 'Failed to load courses.');
//         }
//       } catch (err) {
//         console.error("Error fetching my courses:", err);
//         setError('An unexpected error occurred while fetching courses.');
//       } finally {
//         setCoursesLoading(false);
//       }
//     };

//     // Only load courses if a user is authenticated
//     if (user) {
//       loadMyCourses();
//     }
//   }, [user, authLoading, navigate]); // Depend on user and authLoading to re-run when status changes

//   if (authLoading) {
//     return <div className="p-4 text-center">Loading authentication...</div>;
//   }

//   if (!user) {
//     return <div className="p-4 text-center text-red-600">Please log in to view your courses.</div>;
//   }

//   if (coursesLoading) {
//     return <div className="p-4 text-center">Loading your courses...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-center text-red-600">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Courses</h1>
//       {myCourses.length === 0 ? (
//         <p className="text-center text-gray-600">You haven't enrolled in any courses yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {myCourses.map((course) => (
//             <div key={course._id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
//               <p className="text-gray-700 mb-4">{course.description}</p>
//               <div className="flex justify-between items-center text-sm text-gray-500">
//                 <span>Instructor: {course.instructorName || 'N/A'}</span>
//                 <span>Enrolled: {new Date(course.enrollmentDate || Date.now()).toLocaleDateString()}</span>
//               </div>
//               {/* You might want to add a link to the course detail page here */}
//               <button
//                 onClick={() => alert(`View course: ${course.title}`)} // Replace with navigate to course detail
//                 className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
//               >
//                 Go to Course
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCoursesPage;



// src/pages/MyCoursesPage.jsx
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../src/contexts/AuthContext'; // Adjust path if needed
// import { useNavigate } from 'react-router-dom';

// // Sample data based on your Course Schema
// const sampleCourses = [
//   {
//     _id: 'course1',
//     title: 'Mathematics for Class 10 - Full Course',
//     overview: 'A comprehensive course covering all topics for Class 10 Mathematics as per CBSE board.',
//     description: 'This course includes detailed video lectures, practice problems, and mock tests to ensure you master every concept.',
//     board: 'CBSE',
//     class: 10,
//     subjects: ['Mathematics'],
//     imageURL: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Math',
//     type: 'full class course',
//     price: 5000,
//     discountedPrice: 4500,
//     enrollmentDate: '2024-01-15T10:00:00Z', // Example enrollment date
//     instructorName: 'Dr. Anita Sharma' // Added for display, not in schema but common for courses
//   },
//   {
//     _id: 'course2',
//     title: 'Physics for Class 12 - Chapter on Optics',
//     overview: 'In-depth study of the Optics unit for Class 12 Physics, covering Ray Optics and Wave Optics.',
//     description: 'Master the principles of light, reflection, refraction, interference, diffraction, and polarization with animated lessons and interactive simulations.',
//     board: 'ISC',
//     class: 12,
//     subjects: ['Physics'],
//     imageURL: 'https://via.placeholder.com/150/2196F3/FFFFFF?text=Physics',
//     type: 'monthly subject course',
//     price: 1200,
//     discountedPrice: 0,
//     enrollmentDate: '2024-03-20T14:30:00Z',
//     instructorName: 'Prof. Rajeev Kumar'
//   },
//   {
//     _id: 'course3',
//     title: 'English Grammar - Intermediate Level',
//     overview: 'Improve your English grammar skills with this intermediate-level course suitable for all boards.',
//     description: 'Focuses on complex sentence structures, advanced tenses, conditionals, and common grammatical errors. Includes quizzes and writing exercises.',
//     board: 'All Boards',
//     class: 9, // Can be generic for all boards
//     subjects: ['English'],
//     imageURL: 'https://via.placeholder.com/150/FFC107/FFFFFF?text=English',
//     type: 'full subject course',
//     price: 2500,
//     discountedPrice: 2000,
//     enrollmentDate: '2023-11-01T09:00:00Z',
//     instructorName: 'Ms. Sarah Khan'
//   }
// ];

// const MyCoursesPage = () => {
//   const { user, authLoading } = useAuth();
//   const navigate = useNavigate();

//   const [myCourses, setMyCourses] = useState([]);
//   const [coursesLoading, setCoursesLoading] = useState(true);
//   const [error, setError] = useState(null); // Still useful for potential future errors

//   useEffect(() => {
//     // If auth is still loading, wait.
//     if (authLoading) {
//       return;
//     }

//     // If user is not authenticated after authLoading is false, redirect to home/login
//     if (!user) {
//       navigate('/'); // Or navigate('/login');
//       return;
//     }

//     // Simulate fetching data with a delay
//     setCoursesLoading(true);
//     setError(null);

//     // In a real application, you'd fetch data here
//     // For now, we'll just use the sample data after a short delay
//     const timer = setTimeout(() => {
//       if (user) { // Ensure user is still present when the timeout resolves
//         setMyCourses(sampleCourses);
//         setCoursesLoading(false);
//       }
//     }, 1000); // Simulate network delay of 1 second

//     // Cleanup function to clear the timeout if the component unmounts
//     return () => clearTimeout(timer);

//   }, [user, authLoading, navigate]); // Depend on user and authLoading to re-run when status changes

//   if (authLoading) {
//     return <div className="p-4 text-center">Loading authentication...</div>;
//   }

//   if (!user) {
//     return <div className="p-4 text-center text-red-600">Please log in to view your courses.</div>;
//   }

//   if (coursesLoading) {
//     return <div className="p-4 text-center">Loading your courses...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-center text-red-600">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-center">My Courses</h1>
//       {myCourses.length === 0 ? (
//         <p className="text-center text-gray-600">You haven't enrolled in any courses yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {myCourses.map((course) => (
//             <div key={course._id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <img src={course.imageURL} alt={course.title} className="w-full h-40 object-cover rounded-md mb-4" />
//               <h2 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h2>
//               <p className="text-gray-600 text-sm mb-2">{course.overview}</p>
//               <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-2">
//                 <span><strong className="text-gray-700">Board:</strong> {course.board}</span>
//                 <span><strong className="text-gray-700">Class:</strong> {course.class}</span>
//                 <span><strong className="text-gray-700">Subjects:</strong> {course.subjects.join(', ')}</span>
//               </div>
//               <p className="text-gray-700 font-medium mb-2">
//                 Price: {course.discountedPrice > 0 && course.discountedPrice < course.price ? (
//                   <>
//                     <span className="line-through mr-1">₹{course.price}</span>
//                     <span className="text-green-600">₹{course.discountedPrice}</span>
//                   </>
//                 ) : (
//                   `₹${course.price}`
//                 )}
//               </p>
//               <p className="text-sm text-gray-500 mb-4">Type: {course.type}</p>
//               {course.instructorName && (
//                 <p className="text-sm text-gray-600 mb-2">Instructor: {course.instructorName}</p>
//               )}
//               <p className="text-xs text-gray-500">
//                 Enrolled on: {new Date(course.enrollmentDate).toLocaleDateString()}
//               </p>
//               <button
//                 onClick={() => alert(`Navigating to ${course.title} course details.`)}
//                 className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//               >
//                 Go to Course
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyCoursesPage;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import MyCourseCard from './courseComponents/MyCourseCard'; // Adjust path if necessary
import { useAuth } from '../src/contexts/AuthContext'; // Adjust this path based on your AuthContext.jsx location
import Header from './Header'; // Assuming you have a Header component

// --- Dummy Course Data (for demonstration) ---
// In a real application, this data would come from your backend API
const dummyCourses = [
    {
      _id: '1',
      imageURL: 'https://via.placeholder.com/400x250/AEC6CF/FFFFFF?text=Math+Course',
      title: 'Advanced Algebra Mastery',
      overview: 'Dive deep into complex algebraic concepts, from polynomials to abstract algebra, with practical applications.',
      board: 'CBSE',
      class: '12th',
      subjects: ['Mathematics', 'Algebra', 'Calculus'],
      price: 12000,
      discountedPrice: 9999,
      type: 'class',
      progress: 75, // Added progress for MyCourseCard
    },
    {
      _id: '2',
      imageURL: 'https://via.placeholder.com/400x250/FFDDC1/FFFFFF?text=Physics+Course',
      title: 'Fundamentals of Physics',
      overview: 'An introductory course covering classical mechanics, thermodynamics, and basic electromagnetism.',
      board: 'ICSE',
      class: '10th',
      subjects: ['Physics', 'Mechanics', 'Thermodynamics'],
      price: 8000,
      discountedPrice: 0,
      type: 'subject',
      progress: 30, // Added progress for MyCourseCard
    },
    {
      _id: '3',
      imageURL: 'https://via.placeholder.com/400x250/B3E0FF/FFFFFF?text=Science+Plan',
      title: 'Monthly Science Learning Plan',
      overview: 'Access all science subjects for your class with monthly interactive lessons and doubt clearing sessions.',
      board: 'State Board',
      class: '9th',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
      price: 1500,
      discountedPrice: 1299,
      type: 'monthly',
      progress: 90, // Added progress for MyCourseCard
    },
    {
      _id: '4',
      imageURL: 'https://via.placeholder.com/400x250/D4AF37/FFFFFF?text=Chemistry+Course',
      title: 'Organic Chemistry Essentials',
      overview: 'Explore the building blocks of organic compounds, reactions, and synthesis methods.',
      board: 'CBSE',
      class: '11th',
      subjects: ['Chemistry', 'Organic'],
      price: 9500,
      discountedPrice: 8000,
      type: 'subject',
      progress: 0, // Added progress for MyCourseCard
    },
     {
      _id: '5',
      imageURL: 'https://via.placeholder.com/400x250/F8C4B4/FFFFFF?text=History+Course',
      title: 'Indian History Deep Dive',
      overview: 'A comprehensive journey through ancient, medieval, and modern Indian history.',
      board: 'CBSE',
      class: '10th',
      subjects: ['History', 'Social Science'],
      price: 6000,
      discountedPrice: 0,
      type: 'subject',
      progress: 65, // Added progress for MyCourseCard
    },
    {
      _id: '6',
      imageURL: 'https://via.placeholder.com/400x250/C8A2C8/FFFFFF?text=Full+Year+Package',
      title: 'Class 12th Full Year Package',
      overview: 'Complete access to all subjects for Class 12th, including live classes, study materials, and mock tests.',
      board: 'CBSE',
      class: '12th',
      subjects: ['Physics', 'Chemistry', 'Maths', 'Biology', 'English'],
      price: 30000,
      discountedPrice: 24999,
      type: 'class',
      progress: 50, // Added progress for MyCourseCard
    },
  ];
  // --- End Dummy Course Data ---
  
  
  function MyCoursesPage() {
    const navigate = useNavigate(); // Initialize the navigate hook for routing
    const {user, setUser, authLoading} = useAuth(); // Get authentication state and loading status from AuthContext
  
    const [courses, setCourses] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(true); // State for course data loading
    const [errorCourses, setErrorCourses] = useState(null);   // State for course data errors
  
    // Effect hook to handle authentication check and redirection
    useEffect(() => {
      // If authentication check is complete AND user is not logged in, redirect to home page
      if (!authLoading && !user) {
        console.log("User not authenticated. Redirecting to home page.");
        navigate('/'); // Redirect to the home page
      }
    }, [authLoading, user, navigate]); // Dependencies: Re-run when authLoading, user, or navigate changes
  
    // Effect hook to fetch course data (only runs if user is authenticated)
    useEffect(() => {
      // Only attempt to fetch courses if authentication is complete AND a user is logged in
      if (!authLoading && user) {
        const fetchMyCourses = async () => {
          setLoadingCourses(true); // Start loading course data
          setErrorCourses(null);   // Clear any previous course data errors
          try {
            // --- Replace this simulated API call with your actual backend fetch ---
            // Example:
            // const response = await fetch(`/api/users/${user._id}/courses`); // Assuming an API endpoint for user's courses
            // if (!response.ok) {
            //   throw new Error(`HTTP error! status: ${response.status}`);
            // }
            // const data = await response.json();
            // setCourses(data); // Set courses from API response
  
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate a network delay (1.5 seconds)
            setCourses(dummyCourses); // Set the dummy data for demonstration
  
          } catch (err) {
            console.error("Error fetching my courses:", err);
            setErrorCourses(err.message || 'Failed to load your courses. Please try again.');
          } finally {
            setLoadingCourses(false); // Finish loading course data
          }
        };
  
        fetchMyCourses(); // Call the fetch function
      }
    }, [authLoading, user]); // Dependencies: Re-run when authLoading or user changes
  
    // --- Conditional Rendering based on Authentication and Course Data Status ---
  
    // 1. Display Authentication Loading State
    if (authLoading) {
      return (
        <section className="py-12 md:py-16 bg-gray-50 min-h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center h-64 bg-white rounded-lg shadow-md p-6">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
            <p className="text-gray-700 text-lg font-medium">Checking authentication status...</p>
          </div>
        </section>
      );
    }
  
    // 2. Display Message if User is Not Authenticated (though useEffect should redirect quickly)
    if (!user) {
       return (
         <section className="py-12 md:py-16 bg-gray-50 min-h-screen flex justify-center items-center">
           <p className="text-gray-700 text-lg">You must be logged in to view this page. Redirecting...</p>
         </section>
       );
    }
  
    // 3. Main Content Rendering (User is authenticated)
    return (
        <div>
            <Header />
      <section className="py-12 md:py-16 bg-white min-h-screen">
        <div className="container mx-auto px-2 sm:px-6 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 md:mb-12">
            My Enrolled Courses
          </h2>
  
          {/* Display Course Data Loading State */}
          {loadingCourses && (
            <div className="flex flex-col justify-center items-center h-64 bg-white rounded-lg shadow-md p-6">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
              <p className="text-gray-700 text-lg font-medium">Loading your enrolled courses...</p>
            </div>
          )}
  
          {/* Display Course Data Error State */}
          {errorCourses && (
            <div className="flex flex-col justify-center items-center h-64 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative shadow-md">
              <strong className="font-bold mb-2">Error loading courses:</strong>
              <span className="block sm:inline">{errorCourses}</span>
              <button
                onClick={() => window.location.reload()} // Simple refresh to retry
                className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                Retry
              </button>
            </div>
          )}
  
          {/* Display Empty Courses State */}
          {!loadingCourses && !errorCourses && courses.length === 0 && (
            <div className="text-center py-20 bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 text-xl font-semibold mb-6">
                You haven't enrolled in any courses yet.
              </p>
              <p className="text-gray-600 mb-8">
                Start your learning journey today by exploring our wide range of courses!
              </p>
              <button
                // **Important:** Replace '/explore-courses' with the actual path to your course listing/explore page
                onClick={() => navigate('/explore-courses')}
                className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg
                           hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Explore All Courses
              </button>
            </div>
          )}
  
          {/* Display Enrolled Courses Grid */}
          {!loadingCourses && !errorCourses && courses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {courses.map((course) => (
                <MyCourseCard key={course._id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>
      </div>
    );
  }
  
  export default MyCoursesPage;