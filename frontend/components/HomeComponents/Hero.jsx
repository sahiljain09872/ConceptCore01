// import React from 'react';
// import heroImage from '../../src/assets/heroImage.png';

// function Hero() {
//   return (
//     <section className="w-full">
//       <div className="relative h-screen w-full">
//         {/* Responsive Background Image */}
//         <picture>
//           <source media="(max-width: 767px)" srcSet={heroImage} />
//           <img
//             src={heroImage}
//             alt="Hero Background"
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//         </picture>

//         {/* Top Gradient */}
//         <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-white via-white/30 to-transparent pointer-events-none"></div>


//         {/* Bottom Gradient */}
//         <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>


//         {/* Centered Text Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
//   <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
//     Unlock Your Potential with{' '}
//     <span className="text-blue-500">Conceptual Learning</span>
//   </h1>
// </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;


// import React from 'react';

// function Hero() {
//   return (
//     // Removed px-8 and container mx-auto. Section now stretches full width.
//     <section className="py-16 bg-gray-100 w-full">
//       {/* Added responsive px-4 sm:px-6 lg:px-8 for content padding */}
//       <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
//         <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0"> {/* Adjusted padding for responsive layout */}
//           <div className="w-full h-80 md:h-96 bg-gray-300 rounded-md">
//             {/* Image Placeholder */}
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 pl-0 md:pl-8"> {/* Adjusted padding for responsive layout */}
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Unlock Your Potential with <span className="text-blue-500">Conceptual Learning</span></h1>
//           <p className="text-base md:text-lg text-gray-700 mb-6">ConceptCore provides an innovative approach to education, focusing on deep understanding and critical thinking for students in grades K-12. Start your free trial today!</p>
//           <button className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-600">Start Your Free Trial</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


// components/Hero.jsx
import React from 'react';
import heroImageMobile from '../../src/assets/hero_image_1.png';
import heroImage from '../../src/assets/heroImage.png'
import useIsMobile from '../hooks/useIsMobile';

function HeroMobile() {
  return (
    <section className="w-full">
      <div className="relative h-screen w-full">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroImageMobile} />
          <img
            src={heroImage}
            alt="Hero Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </picture>

        <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-white via-white/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Unlock Your Potential with{' '}
            <span className="text-blue-500">Conceptual Learning</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

function HeroDesktop() {
  return (
    <section className="py-16 bg-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <div className="w-full h-80 md:h-96 bg-gray-300 md:rounded-lg lg:rounded-md overflow-hidden">
            <img
                src={heroImage}
                alt="Hero"
                className="w-full h-full object-cover"
            />
        </div>

        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unlock Your Potential with{' '}
            <span className="text-blue-500">Conceptual Learning</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            ConceptCore provides an innovative approach to education, focusing on deep understanding and critical thinking for students in grades K-12. Start your free trial today!
          </p>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  const isMobile = useIsMobile();

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}

export default Hero;
