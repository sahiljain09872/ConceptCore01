import React from 'react';
import Header from './Header'; // Make sure the path is correct
import Footer from './Footer'; // Make sure the path is correct
import linkedin from '../src/assets/linkedin.jpeg';
import instagram from '../src/assets/instagram.jpeg'; // Placeholder for Instagram icon, replace with actual image path
import { sendContactForm } from '../apis/contact';

const ContactForm = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      console.log('Form data that we are trying to send:', data); // Debugging line to check form data
  
      try {
        await sendContactForm(data);
        alert('Message sent!');
        e.target.reset();
      } catch (error) {
        console.error(error);
        alert('Failed to send message.');
      }
    };
  
    return (
      <div className="py-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h2>
        <form className="space-y-6" onSubmit={(event) => {
            console.log('Form submitted'); // Debugging line to check form submission
            handleSubmit(event); // Call the handleSubmit function
        }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  };

function ContactUs() {
  return (
    // Outer container: Full width (w-full), min-height for content, flex-col for sticky footer layout
    <div className="bg-gray-50 w-full min-h-screen flex flex-col">
      <Header /> {/* Include the Header component */}

      {/* Main content area, stretches to fill available space */}
      <div className="flex-grow py-12">
        <div className="flex-grow pl-4 sm:pl-6 md:pl-10 lg:pl-32 lg:pr-64 md:pr-14 "> {/* Constrained width for main content */}
          {/* Contact Us Title & Description */}
<div className=" mb-12">
  <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
  <p className="text-md md:text-lg text-gray-600">
    We're here to help! Reach out to us with any questions or feedback.
  </p>
</div>

{/* Contact Information Section */}
<div className="mb-6">
  <h2 className="text-2xl font-semibold text-gray-800 mb-8">Contact Information</h2>
  
  <div className="space-y-6 max-w-lg">
    {/* Email */}
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.893 5.262a2 2 0 001.214 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <div>
        <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1">Email</h3>
        <p className="text-gray-600">conceptcore01@gmail.com</p>
      </div>
    </div>

    {/* Phone */}
  
  </div>
</div>

          {/* Contact Form Section */}
          <ContactForm />


          {/* Follow Us Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h2>
            <div className="flex space-x-6">
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/conceptcore01/" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                    <img src={instagram} alt="LinkedIn" className="w-full" />
                </div>
                <span className="text-sm">Instagram</span>
                </a>
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/company/107158185/" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                    <img src={linkedin} alt="LinkedIn" className="w-full" />
                </div>
                <span className="text-sm">LinkedIn</span>
                </a>

            </div>
          </div>
        </div>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default ContactUs;