import axios from 'axios';

const Backend_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${Backend_URL}/api/auth`; // Base API URL for auth endpoints

// Function to verify a token and fetch the authenticated user's profile
export const verifyTokenApi = async (token) => {
  // Add a check for token presence before making the request
  if (!token) {
    console.warn('verifyTokenApi: No token provided. Skipping API call.');
    return { success: false, error: 'No token' };
  }

  try {
    // CHANGE 1: Use a more conventional endpoint like /me for fetching the current user's profile.
    // This endpoint on the backend should be protected by your authMiddleware.
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // Correctly sends the token in the Authorization header
      },
    });

    console.log('Token verification successful. User data:', response);
    return { success: true, user: response.data };

  } catch (error) {
    // Improved error logging and messaging
    console.error('Token verification failed:', error.response?.data?.msg || error.message);

    let errorMessage = 'Token verification failed';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        errorMessage = error.response.data?.msg || 'Unauthorized: Invalid or expired token. Please log in again.';
      } else if (error.response.status === 404) {
        errorMessage = error.response.data?.msg || 'User not found with the provided token.';
      } else {
        errorMessage = error.response.data?.msg || `Server error: ${error.response.status}`;
      }
    } else if (error.request) {
      // The request was made but no response was received (e.g., network error)
      errorMessage = 'No response from server. Please check your internet connection.';
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = `Request setup error: ${error.message}`;
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};