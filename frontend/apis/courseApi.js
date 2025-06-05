const API_BASE_URL = 'http://localhost:8000/api';

export const courseApi = {
  // Fetch all courses
  getAllCourses: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/courses`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  }
};



// src/api/courseApi.js

// const API_BASE_URL = 'http://localhost:8000/api';

// // Sample data for frontend testing
// const sampleCourses = [
//   {
//     _id: '1',
//     title: 'Complete CBSE Class 10 Science Course',
//     overview: 'Comprehensive science course covering Physics, Chemistry, and Biology for CBSE Class 10 students.',
//     description: 'This complete course covers all chapters of CBSE Class 10 Science with detailed explanations, practical experiments, and exam preparation.',
//     board: 'cbse',
//     class: 10,
//     subjects: ['Physics', 'Chemistry', 'Biology'],
//     imageURL: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
//     type: 'class',
//     price: 5999,
//     discountedPrice: 3999,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '2',
//     title: 'Advanced Mathematics for Class 12',
//     overview: 'Complete mathematics preparation for CBSE Class 12 board exams and competitive exams.',
//     description: 'Master calculus, algebra, trigonometry, and coordinate geometry with our expert-designed curriculum.',
//     board: 'cbse',
//     class: 12,
//     subjects: ['Mathematics'],
//     imageURL: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=250&fit=crop',
//     type: 'subject',
//     price: 2999,
//     discountedPrice: 1999,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '3',
//     title: 'Monthly Physics Mastery - Class 11',
//     overview: 'Monthly subscription for Physics concepts, problem-solving, and doubt clearing sessions.',
//     description: 'Get monthly access to live classes, recorded lectures, and personal mentorship for Physics.',
//     board: 'cbse',
//     class: 11,
//     subjects: ['Physics'],
//     imageURL: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
//     type: 'monthly',
//     price: 799,
//     discountedPrice: 0,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '4',
//     title: 'ICSE Class 9 Complete Package',
//     overview: 'All subjects covered for ICSE Class 9 students with interactive learning modules.',
//     description: 'Complete preparation for ICSE Class 9 including English, Mathematics, Science, and Social Studies.',
//     board: 'icse',
//     class: 9,
//     subjects: ['English', 'Mathematics', 'Science', 'Social Studies'],
//     imageURL: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
//     type: 'class',
//     price: 4999,
//     discountedPrice: 2999,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '5',
//     title: 'Chemistry Fundamentals - Class 12',
//     overview: 'Master organic, inorganic, and physical chemistry with practical applications.',
//     description: 'Detailed chemistry course covering all important topics for Class 12 CBSE board exams.',
//     board: 'cbse',
//     class: 12,
//     subjects: ['Chemistry'],
//     imageURL: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=250&fit=crop',
//     type: 'subject',
//     price: 2499,
//     discountedPrice: 1699,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '6',
//     title: 'Monthly English Literature - Class 10',
//     overview: 'Monthly subscription for English literature analysis, grammar, and writing skills.',
//     description: 'Improve your English skills with monthly live sessions and personalized feedback.',
//     board: 'cbse',
//     class: 10,
//     subjects: ['English'],
//     imageURL: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
//     type: 'monthly',
//     price: 599,
//     discountedPrice: 0,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '7',
//     title: 'Rajasthan Board Class 8 Science',
//     overview: 'Complete science course designed specifically for Rajasthan State Board Class 8 students.',
//     description: 'Covers the entire RBSE Class 8 science syllabus with state board specific examples and questions.',
//     board: 'rbse',
//     class: 8,
//     subjects: ['Science'],
//     imageURL: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
//     type: 'subject',
//     price: 1999,
//     discountedPrice: 1299,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '8',
//     title: 'Complete ICSE Class 11 Commerce',
//     overview: 'Comprehensive commerce course covering Accounts, Economics, and Business Studies.',
//     description: 'Complete preparation for ICSE Class 11 Commerce stream with practical examples and case studies.',
//     board: 'icse',
//     class: 11,
//     subjects: ['Accounts', 'Economics', 'Business Studies'],
//     imageURL: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
//     type: 'class',
//     price: 6999,
//     discountedPrice: 4999,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '9',
//     title: 'Monthly Mathematics Boost - Class 9',
//     overview: 'Monthly math sessions focusing on problem-solving techniques and exam strategies.',
//     description: 'Strengthen your mathematical foundation with regular practice sessions and doubt clearing.',
//     board: 'cbse',
//     class: 9,
//     subjects: ['Mathematics'],
//     imageURL: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=250&fit=crop',
//     type: 'monthly',
//     price: 699,
//     discountedPrice: 0,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   },
//   {
//     _id: '10',
//     title: 'Biology Mastery Course - Class 12',
//     overview: 'Complete biology preparation for NEET and Class 12 boards with detailed diagrams.',
//     description: 'Master botany and zoology concepts with 3D animations, diagrams, and exam-focused content.',
//     board: 'cbse',
//     class: 12,
//     subjects: ['Biology'],
//     imageURL: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
//     type: 'subject',
//     price: 3499,
//     discountedPrice: 2299,
//     createdAt: '2024-01-15T00:00:00.000Z',
//     updatedAt: '2024-01-15T00:00:00.000Z'
//   }
// ];

// export const courseApi = {
//   // Fetch all courses
//   getAllCourses: async () => {
//     try {
//       // For frontend testing, return sample data
//       // Comment out this section and uncomment the API call below when backend is ready
      
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       return sampleCourses;
      
//       /* 
//       // Uncomment this section when your backend is ready
//       const response = await fetch(`${API_BASE_URL}/courses`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       return data;
//       */
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//       throw error;
//     }
//   }
// };