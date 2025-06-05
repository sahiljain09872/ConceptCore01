// src/components/LoginPage.js
import React from 'react';
import Header from './Header';
import { sendLoginForm } from '../apis/login.js'; // Updated import path and function name
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../src/contexts/AuthContext.jsx'; // Importing AuthContext if needed

function LoginPage() {
  const {user , setUser , authLoading} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log('Form data that we are trying to send:', data);

    try {
      const response = await sendLoginForm(data); // Call the login API
      console.log('Response from server:', response);

      if (response.status == 400) { // Assuming 401 for unauthorized/invalid credentials
        alert('Invalid email or password. Please try again.');
        return;
      }
      if (response.status == 500) {
        alert('Server error. Please try again later.');
        return;
      }
      if (response.token) {
        localStorage.setItem('token', response.token);
        console.log('login successful of user :', response.user); 
        setUser(response.user);
        navigate("/"); // Redirect to home page after successful login
        e.target.reset();
      } else {
        alert('Failed to log in. Please try again.'); // Generic error for other non-success cases
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to log in. Please try again.');
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-900 w-full min-h-screen flex flex-col">
      <Header />
      <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Welcome Back to ConceptCore
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                placeholder="Email"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-4 bg-gray-100 border-0 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
                placeholder="Password"
              />
            </div>

            {/* Log In Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-300 text-black py-4 px-6 rounded-full font-bold hover:bg-blue-400 transition-colors"
              >
                Log In
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="text-gray-700 hover:underline font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;