import React from 'react';
import { motion } from 'framer-motion';
import Math_Home from '../../src/assets/Math_Home.png';
import Physics_Home from '../../src/assets/Science/Physics5.png';
import History_Home from '../../src/assets/History_Home.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function Courses() {
  const courses = [
    {
      title: 'Mathematics',
      description: 'Master mathematical concepts with our comprehensive courses.',
      image: Math_Home,
      link: '#',
    },
    {
      title: 'Science',
      description: 'Explore the wonders of science through interactive experiments.',
      image: Physics_Home,
      link: '#',
    },
    {
      title: 'History',
      description: 'Uncover the past with our engaging history lessons.',
      image: History_Home,
      link: '#',
    },
  ];

  return (
    <section className="py-12 bg-white w-full">
      <div className="text-center px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Explore Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-md shadow-md overflow-hidden"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="w-full h-48 bg-gray-300 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <a href={course.link} className="text-blue-500 hover:text-blue-600 text-sm">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
