// // src/components/CourseCard.jsx

// import React from 'react';
// import './styles/CourseCard.css';
// import { useNavigate } from 'react-router-dom';

// const CourseCard = ({ course }) => {
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR'
//     }).format(price);
//   };

//   const getBadgeColor = (type) => {
//     switch (type) {
//       case 'class': return '#4CAF50';
//       case 'subject': return '#2196F3';
//       case 'monthly': return '#FF9800';
//       default: return '#757575';
//     }
//   };

//   const getTypeLabel = (type) => {
//     switch (type) {
//       case 'class': return 'Class Course';
//       case 'subject': return 'Subject Course';
//       case 'monthly': return 'Monthly Plan';
//       default: return type;
//     }
//   };

//   const navigate = useNavigate();

//   const handleViewDetails = () => {
//     // Navigate to the CourseDetailPage using the course's _id
//     navigate(`/courses/${course._id}`);
//   };

//   return (
//     <div className="course-card">
//       <div className="course-image">
//         <img src={course.imageURL} alt={course.title} />
//         <div 
//           className="course-type-badge"
//           style={{ backgroundColor: getBadgeColor(course.type) }}
//         >
//           {getTypeLabel(course.type)}
//         </div>
//       </div>
      
//       <div className="course-content">
//         <h3 className="course-title">{course.title}</h3>
//         <p className="course-overview">{course.overview}</p>
        
//         <div className="course-details">
//           <div className="course-meta">
//             <span className="board-class">{course.board} • Class {course.class}</span>
//             <div className="subjects">
//               {course.subjects.slice(0, 3).map((subject, index) => (
//                 <span key={index} className="subject-chip">
//                   {subject}
//                 </span>
//               ))}
//               {course.subjects.length > 3 && (
//                 <span className="subject-chip more">
//                   +{course.subjects.length - 3} more
//                 </span>
//               )}
//             </div>
//           </div>
          
//           <div className="price-section">
//             {course.discountedPrice > 0 ? (
//               <>
//                 <span className="original-price">{formatPrice(course.price)}</span>
//                 <span className="discounted-price">{formatPrice(course.discountedPrice)}</span>
//               </>
//             ) : (
//               <span className="current-price">{formatPrice(course.price)}</span>
//             )}
//           </div>
//         </div>
        
//         <button className="view-details-btn" onClick={handleViewDetails}>View Details</button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;



// // // src/components/courseComponents/CourseCard.jsx (Example)
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const CourseCard = ({ course }) => { // Ensure course prop is passed
// //   const navigate = useNavigate();

// //   const handleViewDetails = () => {
// //     // Navigate to the CourseDetailPage using the course's _id
// //     navigate(`/courses/${course._id}`);
// //   };

// //   return (
// //     <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105">
// //       {/* Placeholder image or actual course image */}
// //       <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
// //         {course.imageUrl ? (
// //           <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
// //         ) : (
// //           `Image for ${course.title}`
// //         )}
// //       </div>
// //       <div className="p-4">
// //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title || 'Course Title'}</h3>
// //         <p className="text-gray-600 text-sm mb-4 line-clamp-3">
// //           {course.subtitle || 'A comprehensive course covering essential concepts.'}
// //         </p>
// //         <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
// //             <span>{course.board || 'Board'}</span>
// //             <span>{course.class ? `Class ${course.class}` : 'Class'}</span>
// //             <span>{course.subjects?.join(', ') || 'Subjects'}</span>
// //         </div>
// //         <button
// //           onClick={handleViewDetails}
// //           className="w-full bg-blue-300 text-black font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
// //         >
// //           View Details
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CourseCard;




// // src/components/CourseCard.jsx

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const CourseCard = ({ course }) => {
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR'
//     }).format(price);
//   };

//   const getBadgeColor = (type) => {
//     switch (type) {
//       case 'class': return 'bg-[#4CAF50]';
//       case 'subject': return 'bg-[#2196F3]';
//       case 'monthly': return 'bg-[#FF9800]';
//       default: return 'bg-gray-600';
//     }
//   };

//   const getTypeLabel = (type) => {
//     switch (type) {
//       case 'class': return 'Class Course';
//       case 'subject': return 'Subject Course';
//       case 'monthly': return 'Monthly Plan';
//       default: return type;
//     }
//   };

//   const navigate = useNavigate();

//   const handleViewDetails = () => {
//     // Navigate to the CourseDetailPage using the course's _id
//     navigate(`/courses/${course._id}`);
//   };

//   return (
//     // Main card container: Now clickable on the entire card for mobile view
//     <div
//       className="
//         bg-white rounded-xl shadow-md overflow-hidden cursor-pointer // Added cursor-pointer
//         transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl

//         // Responsive layout:
//         flex flex-row md:flex-col // Mobile-first: flex-row, md:flex-col for larger screens
//       "
//       onClick={handleViewDetails} // Entire card is now clickable
//     >

//       {/* Course Image Section (Right on mobile, Top on desktop) */}
//       <div className="
//         relative overflow-hidden flex-shrink-0
//         order-2 w-1/3 h-32 rounded-r-xl // Mobile: 1/3 width, smaller height, right rounded
//         md:order-1 md:w-full md:h-52 md:rounded-b-none md:rounded-t-xl // Desktop: full width, original height, top rounded
//       ">
//         <img src={course.imageURL} alt={course.title} className="w-full h-full object-cover" />
//         <div
//           className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-semibold uppercase text-white ${getBadgeColor(course.type)}`}
//         >
//           {/* Text inside badge is hidden on mobile, shown on md screens and up */}
//           <span className="hidden md:inline">{getTypeLabel(course.type)}</span>
//         </div>
//       </div>

//       {/* Course Content Section (Left on mobile, Bottom on desktop) */}
//       <div className="
//         flex flex-col flex-1
//         order-1 w-2/3 p-3 // Mobile: 2/3 width, smaller padding
//         md:order-2 md:w-full md:p-5 // Desktop: full width, original padding
//       ">
//         <h3 className="text-base font-semibold mb-2 text-gray-800 leading-tight // Mobile: smaller text
//                     md:text-lg"> {/* Desktop: original text size */}
//           {course.title}
//         </h3>
//         <p className="text-xs leading-relaxed mb-3 flex-1 line-clamp-3 // Mobile: smaller text, less margin
//                     md:text-sm md:mb-4"> {/* Desktop: original text size, margin */}
//           {course.overview}
//         </p>

//         {/* Course Details & Price Section */}
//         <div className="md:mt-auto">
//           <div className="mb-3 md:mb-4">
//             <span className="text-xs font-medium uppercase tracking-wider mb-2 block text-gray-600">
//               {course.board} • Class {course.class}
//             </span>
//             <div className="flex flex-wrap gap-1">
//               {course.subjects.slice(0, 3).map((subject, index) => (
//                 <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
//                   {subject}
//                 </span>
//               ))}
//               {course.subjects.length > 3 && (
//                 <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
//                   +{course.subjects.length - 3} more
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center gap-2 mb-3 md:mb-4">
//             {course.discountedPrice > 0 ? (
//               <>
//                 <span className="text-sm line-through text-gray-500 // Mobile: smaller text
//                             md:text-base"> {/* Desktop: original text size */}
//                   {formatPrice(course.price)}
//                 </span>
//                 <span className="text-base font-semibold text-blue-500 // Mobile: smaller text
//                             md:text-lg"> {/* Desktop: original text size */}
//                   {formatPrice(course.discountedPrice)}
//                 </span>
//               </>
//             ) : (
//               <span className="text-base font-semibold text-blue-500 // Mobile: smaller text
//                           md:text-lg"> {/* Desktop: original text size */}
//                 {formatPrice(course.price)}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* View Details Button: Hidden on mobile, shown on md screens and up */}
//         <button
//           className="hidden md:block // Hidden by default, block on md screens and up
//                      bg-blue-500 text-white border-none cursor-pointer w-full
//                      transition-colors duration-200 hover:bg-blue-600
//                      py-3 px-4 rounded-lg text-base font-medium" // Desktop styling for button
//           onClick={handleViewDetails}
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const CourseCard = ({ course }) => {
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR'
//     }).format(price);
//   };

//   const getBadgeColor = (type) => {
//     switch (type) {
//       case 'class': return 'bg-[#4CAF50]';
//       case 'subject': return 'bg-[#2196F3]';
//       case 'monthly': return 'bg-[#FF9800]';
//       default: return 'bg-gray-600';
//     }
//   };

//   const getTypeLabel = (type) => {
//     switch (type) {
//       case 'class': return 'Class Course';
//       case 'subject': return 'Subject Course';
//       case 'monthly': return 'Monthly Plan';
//       default: return type;
//     }
//   };

//   const navigate = useNavigate();

//   const handleViewDetails = () => {
//     navigate(`/courses/${course._id}`);
//   };

//   return (
//     // Main card container: Clickable on the entire card
//     <div
//       className="
//         bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
//         transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl

//         // Responsive layout for the CARD ITSELF:
//         // By default (small screens), it's a flex-row.
//         // From medium screens upwards, it becomes a flex-col.
//         flex flex-row md:flex-col
//       "
//       onClick={handleViewDetails}
//     >

//       {/* Course Image Section (Right on small screens, Top on medium/large) */}
//       <div className="
//         relative overflow-hidden flex-shrink-0
//         order-2 w-1/3 h-32 rounded-r-xl // Mobile: 1/3 width, smaller height, right rounded
//         md:order-1 md:w-full md:h-52 md:rounded-b-none md:rounded-t-xl // Desktop: full width, original height, top rounded (from md upwards)
//       ">
//         <img src={course.imageURL} alt={course.title} className="w-full h-full object-cover" />
        
//         {/* Type Badge with Clip Styling on small screens */}
//         <div
//           className={`absolute text-white font-semibold uppercase ${getBadgeColor(course.type)}
//              // Mobile-only clip styling:
//              top-0 left-0 px-3 py-1.5 text-xs
//              [clip-path:polygon(0%_0%,100%_0%,100%_80%,80%_100%,0%_100%)]
             
//              // Desktop styling (md and up):
//              md:top-3 md:left-3 md:px-2 md:py-1 md:rounded-md
//              md:[clip-path:none] // Remove clip-path for desktop (from md upwards)
//              `}
//         >
//           {/* Text inside badge is hidden on small mobile, shown on md screens and up */}
//           <span className="hidden md:inline">{getTypeLabel(course.type)}</span>
//         </div>
//       </div>

//       {/* Course Content Section (Left on small screens, Bottom on medium/large) */}
//       <div className="
//         flex flex-col flex-1
//         order-1 w-2/3 p-3 // Mobile: 2/3 width, smaller padding
//         md:order-2 md:w-full md:p-5 // Desktop: full width, original padding (from md upwards)
//       ">
//         <h3 className="text-base font-semibold mb-2 text-gray-800 leading-tight // Mobile: smaller text
//                     md:text-lg"> {/* Desktop: original text size (from md upwards) */}
//           {course.title}
//         </h3>
//         <p className="text-xs leading-relaxed mb-3 flex-1 line-clamp-3 // Mobile: smaller text, less margin
//                     md:text-sm md:mb-4"> {/* Desktop: original text size, margin (from md upwards) */}
//           {course.overview}
//         </p>

//         {/* Course Details & Price Section */}
//         <div className="md:mt-auto">
//           <div className="mb-3 md:mb-4">
//             <span className="text-xs font-medium uppercase tracking-wider mb-2 block text-gray-600">
//               {course.board} • Class {course.class}
//             </span>
//             <div className="flex flex-wrap gap-1">
//               {course.subjects.slice(0, 3).map((subject, index) => (
//                 <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
//                   {subject}
//                 </span>
//               ))}
//               {course.subjects.length > 3 && (
//                 <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
//                   +{course.subjects.length - 3} more
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center gap-2 mb-3 md:mb-4">
//             {course.discountedPrice > 0 ? (
//               <>
//                 <span className="text-sm line-through text-gray-500 // Mobile: smaller text
//                             md:text-base"> {/* Desktop: original text size (from md upwards) */}
//                   {formatPrice(course.price)}
//                 </span>
//                 <span className="text-base font-semibold text-blue-500 // Mobile: smaller text
//                             md:text-lg"> {/* Desktop: original text size (from md upwards) */}
//                   {formatPrice(course.discountedPrice)}
//                 </span>
//               </>
//             ) : (
//               <span className="text-base font-semibold text-blue-500 // Mobile: smaller text
//                           md:text-lg"> {/* Desktop: original text size (from md upwards) */}
//                 {formatPrice(course.price)}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* View Details Button: Hidden on small mobile, shown on md screens and up */}
//         <button
//           className="hidden md:block // Hidden by default, block on md screens and up
//                      bg-blue-500 text-white border-none cursor-pointer w-full
//                      transition-colors duration-200 hover:bg-blue-600
//                      py-3 px-4 rounded-lg text-base font-medium" // Desktop styling for button
//           onClick={handleViewDetails}
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(price);
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case 'class': return 'bg-[#4CAF50]';
      case 'subject': return 'bg-[#2196F3]';
      case 'monthly': return 'bg-[#FF9800]';
      default: return 'bg-gray-600';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'class': return 'Class Course';
      case 'subject': return 'Subject Course';
      case 'monthly': return 'Monthly Plan';
      default: return type;
    }
  };

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/courses/${course._id}`);
  };

  return (
    // Main card container: Clickable on the entire card
    <div
      className="
        bg-white rounded-xl shadow-md overflow-hidden cursor-pointer
        transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:shadow-xl

        // Responsive layout for the CARD ITSELF:
        // By default (small screens), it's a flex-row.
        // From medium screens upwards, it becomes a flex-col.
        flex flex-row md:flex-col
      "
      onClick={handleViewDetails}
    >

      {/* Course Image Section (Right on small screens, Top on medium/large) */}
      <div className="
        relative overflow-hidden flex-shrink-0
        order-2 w-1/3 h-32 rounded-r-xl // Mobile: 1/3 width, smaller height, right rounded
        md:order-1 md:w-full md:h-52 md:rounded-b-none md:rounded-t-xl // Desktop: full width, original height, top rounded (from md upwards)
      ">
        <img src={course.imageURL} alt={course.title} className="w-full h-full object-cover" />
        
        {/* Type Badge with Mobile Triangular Clip and Desktop Rectangle */}
        <div
          className={`absolute text-white font-semibold ${getBadgeColor(course.type)}
             // Mobile (small screens): Triangular clip style
             top-0 right-0 w-10 h-10 // Size for the triangular clip
             [clip-path:polygon(0%_0%,_100%_0%,_100%_100%)] // Top-right corner triangle
             flex items-end justify-start pr-1 pb-1 // Positioning for potential tiny icon/text if needed for mobile clip
             
             // Desktop (md and up): Revert to original rectangular badge style
             md:top-3 md:left-3 // Position for desktop
             md:w-40 md:h-auto // Size based on content for desktop
             md:px-2 md:py-1 md:rounded-md // Padding and rounded corners for desktop
             md:[clip-path:none] // Remove clip-path for desktop (makes it rectangular)
             md:block // Ensure it's a block-level element for desktop text flow
             text-center
             `}
        >
          {/* Text inside badge: Hidden visually on small mobile, shown on md screens and up */}
          <span className="sr-only md:not-sr-only">{getTypeLabel(course.type)}</span>
          {/* Optional: Add a tiny visual cue for mobile within the clip if desired, e.g.: */}
          {/* <span className="block md:hidden w-1.5 h-1.5 rounded-full bg-white opacity-80 mb-0.5 ml-0.5"></span> */}
        </div>
      </div>

      {/* Course Content Section (Left on small screens, Bottom on medium/large) */}
      <div className="
        flex flex-col flex-1
        order-1 w-2/3 p-3 // Mobile: 2/3 width, smaller padding
        md:order-2 md:w-full md:p-5 // Desktop: full width, original padding (from md upwards)
      ">
        <h3 className="text-base font-semibold mb-2 text-gray-800 leading-tight // Mobile: smaller text
                    md:text-lg"> {/* Desktop: original text size (from md upwards) */}
          {course.title}
        </h3>
        <p className="text-xs leading-relaxed mb-3 flex-1 line-clamp-3 // Mobile: smaller text, less margin
                    md:text-sm md:mb-4"> {/* Desktop: original text size, margin (from md upwards) */}
          {course.overview}
        </p>

        {/* Course Details & Price Section */}
        <div className="md:mt-auto">
          <div className="mb-3 md:mb-4">
            <span className="text-xs font-medium uppercase tracking-wider mb-2 block text-gray-600">
              {course.board} • Class {course.class}
            </span>
            <div className="flex flex-wrap gap-1">
              {course.subjects.slice(0, 3).map((subject, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  {subject}
                </span>
              ))}
              {course.subjects.length > 3 && (
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                  +{course.subjects.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3 md:mb-4">
            {course.discountedPrice > 0 ? (
              <>
                <span className="text-sm line-through text-gray-500 // Mobile: smaller text
                            md:text-base"> {/* Desktop: original text size (from md upwards) */}
                  {formatPrice(course.price)}
                </span>
                <span className="text-base font-semibold text-blue-500 // Mobile: smaller text
                            md:text-lg"> {/* Desktop: original text size (from md upwards) */}
                  {formatPrice(course.discountedPrice)}
                </span>
              </>
            ) : (
              <span className="text-base font-semibold text-blue-500 // Mobile: smaller text
                          md:text-lg"> {/* Desktop: original text size (from md upwards) */}
                {formatPrice(course.price)}
              </span>
            )}
          </div>
        </div>

        {/* View Details Button: Hidden on small mobile, shown on md screens and up */}
        <button
          className="hidden md:block // Hidden by default, block on md screens and up
                     bg-blue-500 text-white border-none cursor-pointer w-full
                     transition-colors duration-200 hover:bg-blue-600
                     py-3 px-4 rounded-lg text-base font-medium" // Desktop styling for button
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;