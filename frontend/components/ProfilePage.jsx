// src/components/ProfilePage.js

import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../apis/user'; // Ensure this path is correct

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                // IMPORTANT: Replace with actual user ID from your auth system
                const userId = 'some_user_id';
                const userData = await getUserProfile(userId);
                setUser(userData);
                setFormData({
                    name: userData.name || '',
                    email: userData.email || '',
                    address: userData.address || '',
                    phone: userData.phone || ''
                });
            } catch (err) {
                console.error("Failed to fetch user data:", err);
                setError("Failed to load user profile. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const userId = 'some_user_id'; // Same user ID
            const updatedUser = await updateUserProfile(userId, formData);
            setUser(updatedUser);
            setIsEditing(false);
            // Consider using a toast notification library for better feedback
            alert('Profile updated successfully!');
        } catch (err) {
            console.error("Failed to update user data:", err);
            setError("Failed to update profile. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // --- Render Logic ---
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-xl text-gray-700">Loading profile...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-gray-700 text-lg">No user data available.</p>
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-lg shadow-xl border border-gray-200">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">User Profile</h1>

            {isEditing ? (
                // --- Edit Mode ---
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    {/* Add more fields here */}

                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                // --- View Mode ---
                <div className="text-gray-700 space-y-3">
                    <p className="text-lg"><strong>Name:</strong> <span className="font-medium">{user.name}</span></p>
                    <p className="text-lg"><strong>Email:</strong> <span className="font-medium">{user.email}</span></p>
                    <p className="text-lg"><strong>Address:</strong> <span className="font-medium">{user.address || 'N/A'}</span></p>
                    <p className="text-lg"><strong>Phone:</strong> <span className="font-medium">{user.phone || 'N/A'}</span></p>
                    {/* Display other user details */}
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;