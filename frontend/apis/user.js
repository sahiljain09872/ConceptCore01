// src/apis/user.js

// Using import.meta.env for Vite projects
// For Create React App, it would be process.env.REACT_APP_BACKEND_URL
const Backend_URL = import.meta.env.VITE_BACKEND_URL;

// Helper function to get the auth token (e.g., from localStorage)
const getAuthToken = () => {
    // IMPORTANT: Replace 'token' with the actual key you use to store your JWT
    // This token is typically obtained after a successful login
    return localStorage.getItem('token');
};

export const getUserProfile = async () => {
    const token = getAuthToken();
    if (!token) {
        // Handle case where token is not available (e.g., redirect to login)
        console.error("No authentication token found.");
        throw new Error("Authentication required.");
    }

    try {
        const response = await fetch(`${Backend_URL}/api/user/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Send the token in the Authorization header
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch user profile');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API Error (getUserProfile):", error);
        throw error;
    }
};

export const updateUserProfile = async (userData) => {
    const token = getAuthToken();
    if (!token) {
        console.error("No authentication token found.");
        throw new Error("Authentication required.");
    }

    try {
        const response = await fetch(`${Backend_URL}/api/user/me`, {
            method: 'PUT', // Your backend uses PUT for updates
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData), // Send the data as JSON
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update user profile');
        }
        const data = await response.json();
        return data; // Your backend returns the updated user
    } catch (error) {
        console.error("API Error (updateUserProfile):", error);
        throw error;
    }
};

// Optional: API call for deleting the user
export const deleteUserProfile = async () => {
    const token = getAuthToken();
    if (!token) {
        console.error("No authentication token found.");
        throw new Error("Authentication required.");
    }

    try {
        const response = await fetch(`${Backend_URL}/api/user/me`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to delete user profile');
        }
        // No data expected back on successful delete, just status 200/204
        return { message: 'User deleted successfully' };
    } catch (error) {
        console.error("API Error (deleteUserProfile):", error);
        throw error;
    }
};