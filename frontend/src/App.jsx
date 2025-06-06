import React from 'react';
import './App.css'; // Your global CSS file (should contain Tailwind directives)
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter from here

// Import your page components
import Home from '../components/Home';
import SignupPage from '../components/SignupPage';
import LoginPage from '../components/LoginPage';
import ContactUs from '../components/ContactUs';
import CoursesPage from '../components/CoursesPage';
import CourseDetailPage from '../components/CourseDetailPage';
import ProfilePage from '../components/ProfilePage';
import MyCoursesPage from '../components/MycoursesPage.jsx';
import CheckoutPage from '../components/CheckoutPage.jsx';  



import { AuthProvider } from './contexts/AuthContext.jsx';

function App(){
  return(
    // Remove the <Router> wrapper here. It should be in index.js/main.jsx
    // <AuthProvider>
    <main className="font-sans bg-gray-50 text-gray-900 w-full min-h-screen flex flex-col">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment and adjust paths for your other routes as needed */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/user" element={<User />} /> */}
          {/* <Route path="/user/profile" element={<UserProfile />} /> */}
          <Route path="/courses/:id" element={<CourseDetailPage />} />
          <Route path="/courses/:id/checkout" element={<CheckoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/my-courses' element={<MyCoursesPage />} />
          
        </Routes>
      </div>
    </main>
    // </AuthProvider>
  )
}

export default App;