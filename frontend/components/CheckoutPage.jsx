import React, { useState } from 'react';

// IMPORTANT: Ensure you have Tailwind CSS set up in your React project.
// If you haven't, please refer to the previous instructions on installing
// and configuring Tailwind CSS and including the Inter font.

const CheckoutPage = () => {
    // State to manage the visibility and message of the custom message box
    const [messageBox, setMessageBox] = useState({
        visible: false,
        message: ''
    });

    // State to manage the selected payment method (credit card or UPI)
    const [paymentMethod, setPaymentMethod] = useState('credit-card'); // Default to credit card

    // Function to show the custom message box
    const showMessageBox = (message) => {
        setMessageBox({ visible: true, message });
    };

    // Function to hide the custom message box
    const hideMessageBox = () => {
        setMessageBox({ visible: false, message: '' });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        // In a real application, you would send this form data to your backend
        // for validation and payment processing.
        // The backend logic would handle the actual UPI or credit card transaction.
        // For this example, we'll just simulate a successful order.

        console.log('Checkout form submitted!');
        // You might want to add client-side validation here before showing success
        showMessageBox('Thank you for your purchase! Your order for the MERN Stack Masterclass has been placed successfully.');
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-8 px-4 bg-gray-50 font-inter antialiased">
            {/* Main Checkout Card */}
            <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden md:flex">

                {/* Order Summary Section */}
                <div className="md:w-1/3 lg:w-2/5 bg-gradient-to-br from-indigo-700 to-purple-600 text-white p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                    {/* Optional: Subtle background pattern for visual interest */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

                    <div className="relative z-10"> {/* Ensure content is above background pattern */}
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6">Order Summary</h2>
                        <div className="space-y-6">
                            {/* Course Item */}
                            <div className="flex items-center space-x-4 bg-indigo-600 bg-opacity-70 backdrop-blur-sm p-4 rounded-lg shadow-md border border-indigo-500">
                                <img
                                    src="https://via.placeholder.com/120x120/4F46E5/FFFFFF?text=MERN+Stack" // Slightly larger image
                                    alt="Full Stack Web Development Masterclass Thumbnail"
                                    className="w-28 h-28 rounded-md object-cover border-2 border-indigo-400"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/120x120/6366F1/FFFFFF?text=Error'; }} // Fallback
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold leading-tight mb-1">Full Stack Web Development Masterclass (MERN Stack)</h3>
                                    <p className="text-indigo-200 text-sm">Build modern, scalable web apps.</p>
                                    <p className="text-2xl font-bold mt-3">$499.00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-10 pt-6 border-t border-indigo-500">
                        <div className="flex justify-between items-center text-3xl font-bold">
                            <span>Total:</span>
                            <span>$499.00</span>
                        </div>
                    </div>
                </div>

                {/* Checkout Form Section */}
                <div className="md:w-2/3 lg:w-3/5 p-8 md:p-10 lg:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Checkout Details</h2>

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Payment Method Selection */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Payment Method</h3>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    className={`py-2 px-4 rounded-lg border ${paymentMethod === 'credit-card' ? 'border-indigo-500 bg-indigo-50 text-indigo-800 font-semibold' : 'border-gray-300 text-gray-600 hover:border-indigo-300 hover:text-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150`}
                                    onClick={() => setPaymentMethod('credit-card')}
                                >
                                    Credit Card
                                </button>
                                <button
                                    type="button"
                                    className={`py-2 px-4 rounded-lg border ${paymentMethod === 'upi' ? 'border-indigo-500 bg-indigo-50 text-indigo-800 font-semibold' : 'border-gray-300 text-gray-600 hover:border-indigo-300 hover:text-indigo-700'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150`}
                                    onClick={() => setPaymentMethod('upi')}
                                >
                                    UPI
                                </button>
                            </div>
                        </div>

                        {/* Credit Card Payment Form (Conditionally Rendered) */}
                        {paymentMethod === 'credit-card' && (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Credit Card Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
                                        <input
                                            type="text"
                                            id="card-number"
                                            name="card-number"
                                            placeholder="XXXX XXXX XXXX XXXX"
                                            maxLength="19"
                                            required
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-1">Expiration</label>
                                            <input
                                                type="text"
                                                id="expiration-date"
                                                name="expiration-date"
                                                placeholder="MM/YY"
                                                maxLength="5"
                                                required
                                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                            <input
                                                type="text"
                                                id="cvc"
                                                name="cvc"
                                                placeholder="XXX"
                                                maxLength="4"
                                                required
                                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                            />
                                        </div>
                                        <div className="col-span-1">
                                            <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                                            <input
                                                type="text"
                                                id="zip-code"
                                                name="zip-code"
                                                placeholder="XXXXX"
                                                maxLength="10"
                                                required
                                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* UPI Payment Options (Conditionally Rendered) */}
                        {paymentMethod === 'upi' && (
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">UPI Payment</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                                        <input
                                            type="text"
                                            id="upi-id"
                                            name="upi-id"
                                            placeholder="yourname@bank"
                                            required
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                        />
                                        <p className="text-sm text-gray-500 mt-1">Enter your UPI ID to pay securely.</p>
                                    </div>

                                    {/* In a real app, you would generate and display a QR code here.
                                          This is just a placeholder.  You would likely use a library
                                          to generate the QR code from a payment link or UPI ID.
                                    */}
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500 mb-2">Or scan this QR code to pay:</p>
                                        <div className="border border-gray-300 rounded-lg p-4">
                                            {/* Replace this with actual QR code generation */}
                                            <img
                                                src="https://via.placeholder.com/150x150/EEEEEE/999999?text=QR+Code"
                                                alt="UPI QR Code"
                                                className="w-32 h-32 mx-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Common Billing Address and Contact Information */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Contact Information</h3>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone number (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        autoComplete="tel"
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Billing Address</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="full-name"
                                        name="full-name"
                                        autoComplete="name"
                                        required
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        autoComplete="street-address"
                                        required
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                        placeholder="123 Main St"
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            autoComplete="address-level2"
                                            required
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                            placeholder="Jaipur"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State / Province</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            autoComplete="address-level1"
                                            required
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
                                            placeholder="Rajasthan"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            required
                                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out bg-white"
                                            defaultValue="IN"
                                        >
                                            <option value="">Select country</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="IN">India</option>
                                            <option value="AU">Australia</option>
                                            <option value="DE">Germany</option>
                                            {/* Add more countries as needed */}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <div className="pt-8">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-200 transform hover:scale-105"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Custom Message Box Overlay */}
            {messageBox.visible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-sm w-full transform transition-all duration-300 scale-100 opacity-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Confirmed!</h3>
                        <p className="text-gray-600 mb-6">{messageBox.message}</p>
                        <button
                            onClick={hideMessageBox}
                            className="py-2 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
                        >
                            Awesome!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;