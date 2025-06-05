// // components/Philosophy.jsx
// import React from 'react';

// function Philosophy() {
//   return (
//     // Removed px-8 and container mx-auto
//     <section className="py-12 bg-white w-full">
//       <div className="text-center px-8"> {/* Added px-8 for content */}
//         <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Philosophy</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-gray-100 rounded-md p-6 shadow-md">
//             <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Conceptual Learning</h3>
//             <p className="text-gray-600 text-sm">We believe in learning by understanding the 'why' behind the 'what'. Our platform encourages critical thinking and problem-solving skills.</p>
//           </div>
//           <div className="bg-gray-100 rounded-md p-6 shadow-md">
//             <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Content</h3>
//             <p className="text-gray-600 text-sm">Engage with our interactive lessons, simulations, and quizzes designed to make learning fun and effective.</p>
//           </div>
//           <div className="bg-gray-100 rounded-md p-6 shadow-md">
//             <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
//             <h3 className="text-xl font-semibold text-gray-700 mb-2">Personalized Learning Paths</h3>
//             <p className="text-gray-600 text-sm">Tailored learning experiences adapt to each student's pace and learning style, ensuring optimal progress.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Philosophy;







// components/HomeComponents/Philosophy.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import root from '../../src/assets/root.png'; // Placeholder for image, replace with actual image path
// import real_world from '../../src/assets/real_world.png'; // Placeholder for image, replace with actual image path
// import open_book from '../../src/assets/open_book.png'; // Placeholder for image, replace with actual image path
// import learning_path1 from '../../src/assets/learning_path1.png'; // Placeholder for image, replace with actual image path
// import idea from '../../src/assets/idea.png'; // Placeholder for image, replace with actual image path
// import growth from '../../src/assets/growth.png'; // Placeholder for image, replace with actual image path
// import tablet from '../../src/assets/tablet.png'; // Placeholder for image, replace with actual image path

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// function Philosophy() {
//   const cards = [
//     {
//       title: 'Conceptual Learning',
//       text: "We believe in learning by understanding the 'why' behind the 'what'. Our platform encourages critical thinking and problem-solving skills.",
//       image: root,
//     },
//     {
//       title: 'Interactive Content',
//       text: 'Engage with our interactive lessons, simulations, and quizzes designed to make learning fun and effective.',
//       image: tablet,
//     },
//     {
//       title: 'Personalized Learning Paths',
//       text: "Tailored learning experiences adapt to each student's pace and learning style, ensuring optimal progress.",
//       image: learning_path1,
//     },
//   ];

//   return (
//     <section className="py-12 bg-white w-full">
//   <div className="text-center px-8">
//     <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Philosophy</h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {cards.map((card, i) => (
//         <motion.div
//           key={i}
//           className="bg-gray-100 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105"
//           custom={i}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: false, amount: 0.3 }}
//           variants={cardVariants}
//         >
//           {/* Improved Circular Image */}
//           <div className="w-24 h-24 mx-auto mb-4 rounded-full ring-4 ring-white overflow-hidden shadow-md">
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <h3 className="text-xl font-semibold text-gray-700 mb-2">{card.title}</h3>
//           <p className="text-gray-600 text-sm">{card.text}</p>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }

// export default Philosophy;


// import React from 'react';
// import { motion } from 'framer-motion';

// // Import your images. Ensure these paths are correct relative to this file.
// // You might want to get new icons/images that fit the "sleek slice" aesthetic better.
// import foundationIcon from '../../src/assets/logo.jpeg'; // Example: A building block or strong base icon
// import applicationIcon from '../../src/assets/logo.jpeg'; // Example: A gear, an arrow pointing forward, or a practical tool
// import discoveryIcon from '../../src/assets/logo.jpeg'; // Example: A globe, a magnifying glass, or a compass
// import collaborationIcon from '../../src/assets/logo.jpeg'; // Example: People connecting, a network
// import growthIcon from '../../src/assets/logo.jpeg'; // Example: A plant growing, an upward arrow, a lightbulb
// import conceptIcon from '../../src/assets/logo.jpeg'; // Example: A brain, a lightbulb, or abstract shapes
// import interactiveIcon from '../../src/assets/logo.jpeg'; // Example: A hand touching a screen, or play button
// import futureIcon from '../../src/assets/logo.jpeg'; // Example: A rocket, a path, or a star

// // --- Important: Create these placeholder icon files in your src/assets/icons directory ---
// // For now, you can use any small, simple PNGs as placeholders.
// // You'll want to replace them with actual icons that visually represent each philosophy.

// const sliceVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: (i) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: i * 0.1, // Stagger effect for slices
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   }),
// };

// function Philosophy() {
//   const philosophies = [
//     {
//       title: 'Build a Strong Foundation',
//       text: "Master the core concepts to unlock your full potential.",
//       icon: foundationIcon,
//     },
//     {
//       title: 'Apply Your Knowledge',
//       text: "Bridge theory with practice through real-world applications.",
//       icon: applicationIcon,
//     },
//     {
//       title: 'Discover Your World',
//       text: "Explore diverse subjects and broaden your horizons.",
//       icon: discoveryIcon,
//     },
//     {
//       title: 'Collaborate Globally',
//       text: "Connect with learners worldwide and share insights.",
//       icon: collaborationIcon,
//     },
//     {
//       title: 'Tailored Growth & Inspiration',
//       text: "Personalized guidance to fuel your unique learning journey.",
//       icon: growthIcon,
//     },
//     {
//       title: 'Grasp Concepts, Beyond Scores',
//       text: "Learn for deep understanding, not just for exams.",
//       icon: conceptIcon,
//     },
//     {
//       title: 'Engaging & Dynamic Content',
//       text: "Interactive lessons that make learning captivating.",
//       icon: interactiveIcon,
//     },
//     {
//       title: 'Pathways to Tomorrow',
//       text: "Guidance for your future academic and career success.",
//       icon: futureIcon,
//     },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
//       <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-12 relative inline-block">
//           Our Guiding Philosophies
//           <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-indigo-600 rounded-full"></span>
//         </h2>

//         {/* Horizontal Scroll for Many Slices / Responsive Flex */}
//         <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-6 py-4 overflow-x-auto no-scrollbar">
//           {philosophies.map((philosophy, i) => (
//             <motion.div
//               key={i}
//               className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)]
//                          h-36 bg-white rounded-xl shadow-lg
//                          flex items-center p-4 relative overflow-hidden
//                          hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 ease-in-out
//                          border border-gray-100"
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.2 }}
//               variants={sliceVariants}
//             >
//               {/* Icon on the left */}
//               <div className="flex-shrink-0 w-16 h-16 mr-4 bg-indigo-100 rounded-full flex items-center justify-center p-2 shadow-inner">
//                 <img
//                   src={philosophy.icon}
//                   alt={philosophy.title}
//                   className="w-10 h-10 object-contain"
//                 />
//               </div>

//               {/* Text content */}
//               <div className="flex-grow text-left">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight">
//                   {philosophy.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-snug">
//                   {philosophy.text}
//                 </p>
//               </div>

//               {/* Subtle background element (optional, for visual interest) */}
//               <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-indigo-50 opacity-20 z-0"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Philosophy;



// import React from 'react';
// import { motion } from 'framer-motion';

// // Import your images. Ensure these paths are correct relative to this file.
// // I'm reusing the icon names from before, assuming you'll map the new generated images to them.
// import foundationIcon from '../../src/assets/foundation_1.png'; // Example: A building block or strong base icon
// import applicationIcon from '../../src/assets/apply_your_knowledge.png'; // Example: A gear, an arrow pointing forward, or a practical tool
// import discoveryIcon from '../../src/assets/discover_world.png'; // Example: A globe, a magnifying glass, or a compass
// import collaborationIcon from '../../src/assets/collabrate_globally.png'; // Example: People connecting, a network
// import growthIcon from '../../src/assets/growth.png'; // Example: A plant growing, an upward arrow, a lightbulb
// import conceptIcon from '../../src/assets/grasp_concept.png'; // Example: A brain, a lightbulb, or abstract shapes
// import interactiveIcon from '../../src/assets/tablet.png'; // Example: A hand touching a screen, or play button
// import futureIcon from '../../src/assets/pathway_3.png'; // Example: A rocket, a path, or a star

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: 'easeOut',
//     },
//   },
// };

// function Philosophy() {
//   const philosophies = [
//     {
//       title: 'Build a Strong Foundation',
//       text: "Master the core concepts to unlock your full potential. Our curriculum emphasizes fundamental understanding over rote memorization.",
//       icon: foundationIcon,
//     },
//     {
//       title: 'Apply Your Knowledge',
//       text: "Bridge theory with practice through engaging real-world applications, projects, and case studies.",
//       icon: applicationIcon,
//     },
//     {
//       title: 'Discover Your World',
//       text: "Explore diverse subjects and broaden your horizons, fostering curiosity and a lifelong love for learning.",
//       icon: discoveryIcon,
//     },
//     {
//       title: 'Collaborate Globally',
//       text: "Connect with learners and experts worldwide, sharing insights and working together on innovative challenges.",
//       icon: collaborationIcon,
//     },
//     {
//       title: 'Tailored Growth & Inspiration',
//       text: "Receive personalized guidance and learning paths that adapt to your pace and aspirations, inspiring your unique potential.",
//       icon: growthIcon,
//     },
//     {
//       title: 'Grasp Concepts, Beyond Scores',
//       text: "Our focus is on deep conceptual understanding, empowering you with true knowledge, not just high marks.",
//       icon: conceptIcon,
//     },
//     {
//       title: 'Engaging & Dynamic Content',
//       text: "Immerse yourself in interactive lessons, simulations, and captivating content designed for effective and enjoyable learning.",
//       icon: interactiveIcon,
//     },
//     {
//       title: 'Pathways to Tomorrow',
//       text: "We provide comprehensive future guidance, preparing you for academic success and a thriving career beyond our platform.",
//       icon: futureIcon,
//     },
//   ];

//   return (
//     <section className="py-16 bg-white overflow-hidden">
//       <div className="text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-12 relative inline-block">
//           Our Philosophies
//         </h2>

//         {/* This div now controls overall section width and padding */}
//         <div className="flex flex-col items-center gap-6 md:gap-10 mx-auto px-4 sm:px-6 lg:px-8"> 
//           {philosophies.map((philosophy, i) => (
//             <motion.div
//               key={i}
//               className={`w-full bg-white rounded-2xl shadow-xl p-3 md:p-8 /* Reduced padding for mobile */
//                          flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6
//                          hover:shadow-2xl transition-all duration-300 ease-in-out
//                          white`}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.3 }}
//               variants={cardVariants}
//             >
//               {/* Image Container - order is important for alternating layout */}
//               {i % 2 === 0 ? ( // For even-indexed cards, image on left
//                 <div className="flex-shrink-0 w-16 h-16 md:w-48 md:h-48 flex items-center justify-center rounded-xl overflow-hidden shadow-lg"> {/* Significantly reduced image size for mobile */}
//                   <img
//                     src={philosophy.icon}
//                     alt={philosophy.title}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>
//               ) : ( // For odd-indexed cards, text first, image on right (will be swapped with flex-row-reverse)
//                 <div className="flex-grow text-center md:text-left">
//                   <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 leading-tight"> {/* Reduced title font size for mobile */}
//                     {philosophy.title}
//                   </h3>
//                   <p className="text-sm md:text-base text-gray-700 leading-relaxed"> {/* Reduced body text font size for mobile */}
//                     {philosophy.text}
//                   </p>
//                 </div>
//               )}

//               {/* Text Content - order is important for alternating layout */}
//               {i % 2 === 0 ? ( // For even-indexed cards, text on right
//                 <div className="flex-grow text-center md:text-left">
//                   <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 leading-tight"> {/* Reduced title font size for mobile */}
//                     {philosophy.title}
//                   </h3>
//                   <p className="text-sm md:text-base text-gray-700 leading-relaxed"> {/* Reduced body text font size for mobile */}
//                     {philosophy.text}
//                   </p>
//                 </div>
//               ) : ( // For odd-indexed cards, image on right, so text comes first visually on md+
//                 <div className="flex-shrink-0 w-16 h-16 md:w-48 md:h-48 flex items-center justify-center rounded-xl overflow-hidden shadow-lg order-first md:order-last"> {/* Significantly reduced image size for mobile, order unchanged */}
//                   <img
//                     src={philosophy.icon}
//                     alt={philosophy.title}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Philosophy;



// import React from 'react';
// import { motion } from 'framer-motion';

// // Import your images. Ensure these paths are correct relative to this file.
// // NOTE: For this code to run in a standalone environment, you would need to replace these
// // with publicly accessible URLs or base64 encoded images, as local file paths
// // are not directly accessible in a browser environment without a build step.
// import foundationIcon from '../../src/assets/foundation_1.png';
// import applicationIcon from '../../src/assets/apply_your_knowledge.png';
// import discoveryIcon from '../../src/assets/discover_world.png';
// import collaborationIcon from '../../src/assets/collabrate_globally.png';
// import growthIcon from '../../src/assets/growth.png';
// import conceptIcon from '../../src/assets/grasp_concept_2.png';
// import interactiveIcon from '../../src/assets/tablet.png';
// import futureIcon from '../../src/assets/pathway_3.png';

// // Variants for desktop animation (slide up from bottom)
// const desktopCardVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   },
// };

// // Function to generate variants for mobile animation (slide from left/right)
// const mobileCardVariants = (index) => ({
//   hidden: {
//     opacity: 0,
//     x: index % 2 === 0 ? -100 : 100, // Slide from left if even, from right if odd
//     scale: 0.95,
//   },
//   visible: {
//     opacity: 1,
//     x: 0, // Slide to original position
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   },
// });

// function Philosophy() {
//   const philosophies = [
//     {
//       title: 'Build a Strong Foundation',
//       text: "Master the core concepts to unlock your full potential. Our curriculum emphasizes fundamental understanding over rote memorization.",
//       icon: foundationIcon,
//     },
//     {
//       title: 'Apply Your Knowledge',
//       text: "Bridge theory with practice through engaging real-world applications, projects, and case studies.",
//       icon: applicationIcon,
//     },
//     {
//       title: 'Discover Your World',
//       text: "Explore diverse subjects and broaden your horizons, fostering curiosity and a lifelong love for learning.",
//       icon: discoveryIcon,
//     },
//     {
//       title: 'Collaborate Globally',
//       text: "Connect with learners and experts worldwide, sharing insights and working together on innovative challenges.",
//       icon: collaborationIcon,
//     },
//     {
//       title: 'Tailored Growth & Inspiration',
//       text: "Receive personalized guidance and learning paths that adapt to your pace and aspirations, inspiring your unique potential.",
//       icon: growthIcon,
//     },
//     {
//       title: 'Grasp Concepts, Beyond Scores',
//       text: "Our focus is on deep conceptual understanding, empowering you with true knowledge, not just high marks.",
//       icon: conceptIcon,
//     },
//     {
//       title: 'Engaging & Dynamic Content',
//       text: "Immerse yourself in interactive lessons, simulations, and captivating content designed for effective and enjoyable learning.",
//       icon: interactiveIcon,
//     },
//     {
//       title: 'Pathways to Tomorrow',
//       text: "We provide comprehensive future guidance, preparing you for academic success and a thriving career beyond our platform.",
//       icon: futureIcon,
//     },
//   ];

//   return (
//     <section className="py-16 bg-white overflow-hidden">
//       <div className="text-center">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-12 relative inline-block">
//           Our Philosophies
//         </h2>

//         <div className="flex flex-col items-center gap-6 md:gap-10 mx-auto px-4 sm:px-6 lg:px-8">
//           {philosophies.map((philosophy, i) => (
//             // Outer div for common styling like shadow, rounded corners, etc.
//             <div
//               key={i}
//               className={`w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden relative`}
//             >
//               {/* MOBILE VERSION OF THE CARD (hidden on md and up) */}
//               <motion.div
//                 className="block md:hidden w-full p-4 min-h-[200px] flex items-center justify-center text-center bg-cover bg-center"
//                 style={{ backgroundImage: `url(${philosophy.icon})` }}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.3 }}
//                 variants={mobileCardVariants(i)}
//               >
//                 {/* Overlay for text readability on mobile background image - increased opacity to 40% */}
//                 <div className="absolute inset-0 bg-white/40 rounded-2xl"></div>

//                 {/* Text content for mobile, placed over the background image */}
//                 <div className="relative z-10 text-gray-900">
//                   <h3 className="text-xl font-bold mb-2 leading-tight">
//                     {philosophy.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed">
//                     {philosophy.text}
//                   </p>
//                 </div>
//               </motion.div>

//               {/* DESKTOP VERSION OF THE CARD (hidden on smaller than md) */}
//               <motion.div
//                 className={`hidden md:flex w-full p-8 bg-white flex-row items-center justify-between gap-6 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.3 }}
//                 variants={desktopCardVariants}
//               >
//                 {/* Image for desktop */}
//                 <div className="flex-shrink-0 w-48 h-48 flex items-center justify-center rounded-xl overflow-hidden shadow-lg">
//                   <img
//                     src={philosophy.icon}
//                     alt={philosophy.title}
//                     className="w-full h-full object-cover object-center"
//                   />
//                 </div>

//                 {/* Text content for desktop */}
//                 <div className="flex-grow text-left">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
//                     {philosophy.title}
//                   </h3>
//                   <p className="text-base text-gray-700 leading-relaxed">
//                     {philosophy.text}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Philosophy;



import React from 'react';
import { motion } from 'framer-motion';

// Import your images. Ensure these paths are correct relative to this file.
import foundationIcon from '../../src/assets/foundation_1.png';
import applicationIcon from '../../src/assets/apply_your_knowledge_2.png';
import discoveryIcon from '../../src/assets/discover_world.png';
import collaborationIcon from '../../src/assets/collabrate_globally_3.png';
import growthIcon from '../../src/assets/growth_2.png';
import conceptIcon from '../../src/assets/grasp_concept_11.png';
import interactiveIcon from '../../src/assets/tablet.png';
import futureIcon from '../../src/assets/pathway_3.png';

// Variants for desktop animation (slide up from bottom)
const desktopCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Function to generate variants for mobile animation (slide from left/right)
const mobileCardVariants = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100, // Slide from left if even, from right if odd
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0, // Slide to original position
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
});

function Philosophy() {
  const philosophies = [
    {
      title: 'Build a Strong Foundation',
      text: "Master the core concepts to unlock your full potential. Our curriculum emphasizes fundamental understanding over rote memorization.",
      icon: foundationIcon,
    },
    {
      title: 'Apply Your Knowledge',
      text: "Bridge theory with practice through engaging real-world applications, projects, and case studies.",
      icon: applicationIcon,
    },
    {
      title: 'Discover Your World',
      text: "Explore diverse subjects and broaden your horizons, fostering curiosity and a lifelong love for learning.",
      icon: discoveryIcon,
    },
    {
      title: 'Collaborate Globally',
      text: "Connect with learners and experts worldwide, sharing insights and working together on innovative challenges.",
      icon: collaborationIcon,
    },
    {
      title: 'Tailored Growth & Inspiration',
      text: "Receive personalized guidance and learning paths that adapt to your pace and aspirations, inspiring your unique potential.",
      icon: growthIcon,
    },
    {
      title: 'Grasp Concepts, Beyond Scores',
      text: "Our focus is on deep conceptual understanding, empowering you with true knowledge, not just high marks.",
      icon: conceptIcon,
    },
    {
      title: 'Engaging & Dynamic Content',
    text: "Immerse yourself in interactive lessons, simulations, and captivating content designed for effective and enjoyable learning.",
      icon: interactiveIcon,
    },
    {
      title: 'Pathways to Tomorrow',
      text: "We provide comprehensive future guidance, preparing you for academic success and a thriving career beyond our platform.",
      icon: futureIcon,
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 relative inline-block">
          Our Philosophies
        </h2>

        <div className="flex flex-col items-center gap-6 md:gap-10 mx-auto px-4 sm:px-6 lg:px-8">
          {philosophies.map((philosophy, i) => (
            <div
              key={i}
              className={`w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden relative`}
            >
              {/* MOBILE VERSION OF THE CARD (hidden on md and up) */}
              <motion.div
                className="block md:hidden w-full p-4 min-h-[200px] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${philosophy.icon})` }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={mobileCardVariants(i)}
              >
                {/* Overlay for text readability on mobile background image - now a gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent rounded-2xl"></div>

                {/* Text content for mobile, placed over the background image */}
                <div className="relative z-10 text-gray-900">
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {philosophy.title}
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed">
                    {philosophy.text}
                  </p>
                </div>
              </motion.div>

              {/* DESKTOP VERSION OF THE CARD (hidden on smaller than md) */}
              <motion.div
                className={`hidden md:flex w-full p-8 bg-white flex-row items-center justify-between gap-6 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={desktopCardVariants}
              >
                {/* Image for desktop */}
                <div className="flex-shrink-0 w-48 h-48 flex items-center justify-center rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={philosophy.icon}
                    alt={philosophy.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Text content for desktop */}
                <div className="flex-grow text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                    {philosophy.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {philosophy.text}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;