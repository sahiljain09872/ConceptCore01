// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import { courseApi } from '../apis/courseApi'; // Assuming this path is correct

// // Placeholder SVGs for Key Features icons
// const IconCheckmark = () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;
// const IconBook = () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>;
// const IconCode = () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 20L2 16l4-4"></path></svg>;

// const CourseDetailPage = () => {
//   const { id } = useParams(); // Get course ID from URL
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         setLoading(true);
//         const courseData = await courseApi.getCourseById(id);
//         setCourse(courseData);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch course details. Please try again later.');
//         console.error('Error fetching course:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchCourse();
//     }
//   }, [id]); // Re-fetch if ID changes

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <p className="text-lg text-gray-700">Loading course details...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//         <h2 className="text-2xl font-semibold text-red-600 mb-4">Error</h2>
//         <p className="text-gray-700 mb-4">{error}</p>
//         <button
//           onClick={() => navigate('/courses')}
//           className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//         >
//           Back to Courses
//         </button>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Course Not Found</h2>
//         <p className="text-gray-600 mb-4">The course you are looking for does not exist.</p>
//         <button
//           onClick={() => navigate('/courses')}
//           className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//         >
//           Back to Courses
//         </button>
//       </div>
//     );
//   }

//   // Helper to choose icon based on feature type (can be extended)
//   const getFeatureIcon = (iconName) => {
//     switch (iconName) {
//       case 'retention': return <IconCheckmark />;
//       case 'exam': return <IconBook />;
//       case 'tech': return <IconCode />;
//       default: return <IconCheckmark />; // Default icon
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col bg-gray-50">
//       <Header />

//       <div className="flex-grow py-8 md:py-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Back Button */}
//           <button
//             onClick={() => navigate(-1)} // Navigates back one step in history
//             className="flex items-center text-blue-600 hover:text-blue-800 mb-6 md:mb-8 text-lg"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
//             Back to Courses
//           </button>

//           {/* Course Title & Subtitle */}
//           <div className="text-center mb-8 md:mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//               {course.title || 'Course Title'}
//             </h1>
//             <p className="text-lg md:text-xl text-gray-600">
//               {course.subtitle || 'Master complex concepts with our comprehensive course designed for long-term retention and exam success.'}
//             </p>
//           </div>

//           {/* Main Course Image/Video Placeholder */}
//           <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden mb-12 shadow-lg">
//             {course.imageUrl ? (
//               <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
//             ) : (
//               <div className="flex items-center justify-center w-full h-full text-gray-500 text-lg">
//                 Course Image Placeholder
//               </div>
//             )}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <div className="lg:col-span-2 space-y-12">
//               {/* Course Overview */}
//               <div>
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">Course Overview</h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   {course.overview?.description || 'This course is tailored for students aiming to excel in physics. The curriculum covers foundational concepts and advanced topics, designed to promote deep understanding and problem-solving skills. Our teaching methodology integrates long-term retention techniques, such as spaced repetition and active recall exercises, to ensure concepts stick. We provide comprehensive preparation for all major physics exams, and personalized feedback, and leverage technology to enhance learning through simulations and interactive exercises.'}
//                 </p>
//               </div>

//               {/* Key Features */}
//               <div>
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-6">Key Features</h2>
//                 <div className="space-y-4">
//                   {course.keyFeatures && course.keyFeatures.map((feature, index) => (
//                     <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
//                       <div className="flex-shrink-0">
//                         {getFeatureIcon(feature.icon)}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-medium text-gray-900">{feature.text}</h3>
//                         <p className="text-gray-600">{feature.details}</p>
//                       </div>
//                     </div>
//                   ))}
//                   {!course.keyFeatures && (
//                       <p className="text-gray-600">No key features listed for this course.</p>
//                   )}
//                 </div>
//               </div>

//               {/* Course Schedule */}
//               <div>
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-6">Course Schedule</h2>
//                 <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Week</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activities</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {course.courseSchedule && course.courseSchedule.map((item, index) => (
//                         <tr key={index}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.week}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.topic}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.activities}</td>
//                         </tr>
//                       ))}
//                       {!course.courseSchedule && (
//                           <tr><td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-600">No schedule available.</td></tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Prerequisites */}
//               <div>
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
//                 <p className="text-gray-700 leading-relaxed">
//                   {course.prerequisites?.description || 'Students should have a solid foundation in basic physics concepts and mathematics, including algebra and trigonometry. Prior completion of a Grade 10 physics course or equivalent is recommended.'}
//                 </p>
//               </div>

//             </div> {/* End lg:col-span-2 */}

//             {/* Student Testimonials (Sidebar/Right Column) */}
//             <div className="lg:col-span-1 space-y-8 bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-semibold text-gray-800 mb-6">Student Testimonials</h2>
//               {course.studentTestimonials && course.studentTestimonials.length > 0 ? (
//                 course.studentTestimonials.map((testimonial, index) => (
//                   <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0">
//                     <p className="text-gray-900 font-medium mb-1">{testimonial.name}</p>
//                     <div className="flex items-center mb-2">
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
//                       ))}
//                     </div>
//                     <p className="text-gray-700 italic">"{testimonial.quote}"</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-gray-600">No student testimonials yet.</p>
//               )}
//             </div> {/* End lg:col-span-1 */}

//           </div> {/* End grid */}

//           {/* Enroll Now Button */}
//           <div className="text-center mt-12">
//             <button
//               onClick={() => alert('Enrollment functionality would go here!')}
//               className="bg-blue-600 text-white py-4 px-12 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
//             >
//               Enroll Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CourseDetailPage;















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Ensure path is correct
import Footer from './Footer'; // Ensure path is correct

import { useAuth } from '../src/contexts/AuthContext'; // Adjust path as necessary


// --- START: Sample Data for UI development ---
const sampleCourse = {
  _id: "6839bc79d0b7122a2d133d32",
  title: "Advanced Physics for Grade 11",
  subtitle: "Master complex physics concepts with our comprehensive course designed for long-term retention and exam success.",
  imageUrl: "https://via.placeholder.com/1200x600?text=Advanced+Physics+Course+Image", // Sample image URL
  overview: {
    title: "Course Overview",
    description: "This course is tailored for Grade 11 students aiming to excel in physics. The curriculum covers foundational concepts and advanced topics, designed to promote deep understanding and problem-solving skills. Our teaching methodology integrates long-term retention techniques, such as spaced repetition and active recall exercises, to ensure concepts stick. We provide comprehensive preparation for all major physics exams, and personalized feedback, and leverage technology to enhance learning through simulations and interactive exercises. This course is designed to provide a solid foundation for future studies in science and engineering."
  },
  keyFeatures: [
    { icon: "retention", text: "Long-term Retention Techniques", details: "Learn physics concepts in a way that ensures long-term retention through active recall and spaced repetition strategies, making complex topics easier to grasp and remember for exams." },
    { icon: "exam", text: "Integrated Exam Prep", details: "Comprehensive preparation for all major physics exams, including mock tests, past papers analysis, and targeted practice questions to build confidence." },
    { icon: "tech", text: "Tech Integration", details: "Engage with our interactive lessons, 3D simulations, virtual labs, and gamified exercises designed to make learning fun, intuitive, and highly effective. AI-powered tools provide personalized feedback." }
  ],
  courseSchedule: [
    { week: "Week 1", topic: "Introduction to Mechanics", activities: "Kinematics and Dynamics, Newton's Laws of Motion, Work, Energy, and Power" },
    { week: "Week 2", topic: "Thermodynamics", activities: "Heat and Energy Transfer, Laws of Thermodynamics, Entropy and Heat Engines" },
    { week: "Week 3", topic: "Electromagnetism", activities: "Electric Fields, Magnetic Fields, Electromagnetic Induction, AC Circuits" },
    { week: "Week 4", topic: "Modern Physics", activities: "Quantum Mechanics and Relativity, Atomic Structure, Nuclear Physics, Wave-Particle Duality" },
    { week: "Week 5", topic: "Waves and Optics", activities: "Types of Waves, Sound Waves, Light Waves, Reflection, Refraction, Diffraction, Interference" }
  ],
  prerequisites: {
    title: "Prerequisites",
    description: "Students should have a solid foundation in basic physics concepts and mathematics, including algebra, trigonometry, and basic calculus. Prior completion of a Grade 10 physics course or equivalent is strongly recommended. Familiarity with scientific notation and unit conversions is also beneficial."
  },
  studentTestimonials: [ // Testimonials data is kept but not rendered
    { name: "Sophia Clark", rating: 5, quote: "This course helped me understand physics in a way that no other resource has. The long-term retention techniques really work and made my exam preparation stress-free. Highly recommended!" },
    { name: "Ethan Carter", rating: 4, quote: "The integrated exam prep was incredibly helpful. I felt confident going into my exams. The simulations were particularly insightful for visualizing complex concepts." },
    { name: "Liam Rodriguez", rating: 5, quote: "ConceptCore's approach to physics made it much more enjoyable. The course schedule was well-structured, and the instructors were very supportive." }
  ],
};
// --- END: Sample Data ---


// Placeholder SVGs for Key Features icons
const IconCheckmark = () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;
const IconBook = () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>;
const IconCode = () => <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 20L2 16l4-4"></path></svg>;


const CourseDetailPage = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  const { user , setUser , authLoading } = useAuth();

  useEffect(() => {
    const loadSampleCourse = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setCourse(sampleCourse);
    };

    loadSampleCourse();
  }, []);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-700">Loading sample course data...</p>
      </div>
    );
  }

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'retention': return <IconCheckmark />;
      case 'exam': return <IconBook />;
      case 'tech': return <IconCode />;
      default: return <IconCheckmark />;
    }
  };

  const handleEnrollClick = () => {
    if (user) {
        alert(`Enrolling ${user.name} in the course!`);
       
        console.log("User is logged in. Proceeding with enrollment.");
    } else {
        // User is NOT logged in, redirect to signup page
        alert('Please sign up or log in to enroll in the course.');
        navigate('/signup'); // Redirect to your signup page
    }
    };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex-grow py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6 md:mb-8 text-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Courses
          </button>

          {/* Course Title & Subtitle */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {course.subtitle}
            </p>
          </div>

          {/* Main Course Image/Video Placeholder */}
          <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden mb-12 shadow-lg">
            {course.imageUrl ? (
              <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-500 text-lg">
                Course Image Placeholder
              </div>
            )}
          </div>

          {/* This grid now has only one column for content */}
          <div className="grid grid-cols-1 gap-12"> {/* Removed lg:grid-cols-3 */}
            <div className="lg:col-span-2 space-y-12"> {/* This div now spans full width in the grid */}
              {/* Course Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Course Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  {course.overview.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Key Features</h2>
                <div className="space-y-4">
                  {course.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex-shrink-0">
                        {getFeatureIcon(feature.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900">{feature.text}</h3>
                        <p className="text-gray-600">{feature.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Schedule */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Course Schedule</h2>
                <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Week</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activities</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {course.courseSchedule.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.week}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.topic}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.activities}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Prerequisites</h2>
                <p className="text-gray-700 leading-relaxed">
                  {course.prerequisites.description}
                </p>
              </div>

            </div> {/* End lg:col-span-2 */}

            {/* Testimonials Section REMOVED - This was the lg:col-span-1 div */}

          </div> {/* End grid */}

          {/* Enroll Now Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleEnrollClick}
              className="bg-blue-600 text-white py-4 px-12 rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      <Footer /> {/* Your Footer component */}
    </div>
  );
};

export default CourseDetailPage;