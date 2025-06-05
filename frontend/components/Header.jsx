import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.jpeg';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger icons

// Import the useAuth hook and profile icon
import { useAuth } from '../src/contexts/AuthContext.jsx';
import profileIcon from '../src/assets/profile.png'; // Your icon path

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // New state for profile dropdown

  // Refs for closing dropdowns on outside click
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Use the auth context
  const { user, authLoading, logout } = useAuth();

  // console.log('User in Header:', user); // Debugging line to check user state
  // console.log('Auth Loading in Header:', authLoading); // Debugging line to check auth loading state

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileDropdownOpen(false); // Close profile dropdown if mobile menu opens
  };

  // Function to toggle profile dropdown
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsMenuOpen(false); // Close mobile menu if profile dropdown opens
  };

  // Function to handle logout and close menus if open
  const handleLogout = () => {
    logout(); // Assuming logout function is provided by useAuth
    setIsMenuOpen(false); // Close mobile menu after logout
    setIsProfileDropdownOpen(false); // Close profile dropdown after logout
    navigate('/'); // Redirect to home or login page after logout
  };

  // Effect to close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close profile dropdown
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
      // Close mobile menu (if it's not the hamburger/profile icon toggling it)
      // This is a bit more complex as the toggle button is outside the ref'd div.
      // The toggleMenu function handles this well enough.
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Run once on mount to set up listener


  return (
    <header className="bg-white shadow-sm py-4 w-full border-b border-gray-100 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 md:px-6 lg:px-8">
        {/* Left Section: Logo + Company Name */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Company Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-gray-900">ConceptCore</span>
        </div>

        {/* Mobile-specific right section (Hamburger or Profile Icon) */}
        <div className="lg:hidden flex items-center space-x-4">
          {authLoading ? (
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div> // Simple loading indicator
          ) : user ? (
            // If logged in, show profile icon to open/close mobile menu
            <button onClick={toggleMenu} className="focus:outline-none p-1"> {/* Added padding for touch target */}
              <img src={profileIcon} alt="Profile" className="h-8 w-8 rounded-full" />
            </button>
          ) : (
            // If not logged in, show hamburger
            <button onClick={toggleMenu} className="focus:outline-none p-1"> {/* Added padding for touch target */}
              {isMenuOpen ? <FiX size={24} className="text-gray-700" /> : <FiMenu size={24} className="text-gray-700" />}
            </button>
          )}
        </div>


        {/* Right Section: Navigation + Buttons (Desktop/Larger Tablets) */}
        <div className="hidden lg:flex items-center space-x-6">
          <nav className="flex space-x-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="/courses" className="hover:text-blue-600 transition-colors">Courses</a>
            <a href="/contactus" className="hover:text-blue-600 transition-colors">Contact us</a>
            <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
            {/* "My Courses" link only if logged in */}
            {user && (
              <a href="/my-courses" className="hover:text-blue-600 transition-colors">My Courses</a>
            )}
          </nav>
          <div className="relative" ref={profileDropdownRef}> {/* Ref for dropdown */}
            {authLoading ? (
              <div className="w-20 h-10 bg-gray-200 rounded-md animate-pulse"></div> // Loading state for buttons
            ) : user ? (
              // If logged in, show profile button and dropdown
              <>
                <button
                  onClick={toggleProfileDropdown}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
                >
                  <img src={profileIcon} alt="Profile" className="h-8 w-8 rounded-full" />
                </button>
                {/* Profile Dropdown Menu (Desktop) */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100 origin-top-right animate-fade-in-down">
                    <button
                      onClick={() => { navigate('/profile'); toggleProfileDropdown(); }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 w-full text-left transition-colors"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              // If not logged in, show Sign Up and Log In
              <>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-blue-300 text-black py-2 px-5 rounded-full font-bold hover:bg-blue-400 transition-colors"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="bg-gray-100 text-gray-800 py-2 px-5 rounded-md font-semibold hover:bg-gray-200 transition-colors"
                >
                  Log In
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 border-t border-gray-100 mt-2 pt-2 bg-white shadow-lg rounded-b-md" ref={mobileMenuRef}>
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium py-2">
            <a href="/" className="hover:text-blue-600 py-2 block transition-colors" onClick={toggleMenu}>Home</a>
            <a href="/courses" className="hover:text-blue-600 py-2 block transition-colors" onClick={toggleMenu}>Courses</a>
            <a href="/contactus" className="hover:text-blue-600 py-2 block transition-colors" onClick={toggleMenu}>Contact us</a>
            <a href="/about" className="hover:text-blue-600 py-2 block transition-colors" onClick={toggleMenu}>About</a>
            {/* "My Courses" link and "Profile" link if logged in, in mobile menu */}
            {user && (
              <>
                <a href="/my-courses" className="hover:text-blue-600 py-2 block transition-colors" onClick={toggleMenu}>My Courses</a>
                <a href="/profile" className="hover:text-blue-600 py-2 block transition-colors" onClick={toggleMenu}>Profile</a>
              </>
            )}
          </nav>
          <div className="flex flex-col space-y-3 mt-4 pt-2 border-t border-gray-100">
            {authLoading ? (
              <div className="w-full h-10 bg-gray-200 rounded-md animate-pulse"></div> // Loading state for buttons
            ) : user ? (
              // If logged in, show logout in mobile menu
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-5 rounded-md font-semibold hover:bg-red-600 transition-colors w-full text-left"
              >
                Log Out
              </button>
            ) : (
              // If not logged in, show Sign Up and Log In
              <>
                <button
                  onClick={() => { navigate('/signup'); toggleMenu(); }}
                  className="bg-blue-300 text-black py-2 px-5 rounded-full font-bold hover:bg-blue-400 transition-colors w-full text-left"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => { navigate('/login'); toggleMenu(); }}
                  className="bg-gray-100 text-gray-800 py-2 px-5 rounded-md font-semibold hover:bg-gray-200 transition-colors w-full text-left"
                >
                  Log In
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;