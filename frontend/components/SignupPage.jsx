import React from 'react';
import Header from './Header';
import { sendSignupForm } from '../apis/signup.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../src/contexts/AuthContext.jsx';

function SignupPage() {
  const navigate = useNavigate();
  const {user , setUser , authLoading} = useAuth();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Form data that we are trying to send:', data);

    try {
      const response = await sendSignupForm(data);
      console.log('Response from server:', response);
      if(response.status === 500) {
        alert('Server error. Please try again later.');
        return;
      }
      if (response.status === 400) {
        alert('User already exists. Try to log in instead.');
        return;
      }
      console.log('Signup successful:');
      localStorage.setItem('token', response.token);
      setUser(response.user);
      navigate("/"); // Redirect to home page after successful signup
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900 w-full min-h-screen flex flex-col">
      <Header />
      <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Welcome to ConceptCore
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email" // ✅ Added name
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                placeholder="Email"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                name="password" // ✅ Added name
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                placeholder="Password"
              />
            </div>

            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name" // ✅ Added name
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                placeholder="Name"
              />
            </div>

            {/* Sign Up Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-300 text-black py-4 px-6 rounded-full font-bold hover:bg-blue-400 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-gray-700 hover:underline font-medium">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
