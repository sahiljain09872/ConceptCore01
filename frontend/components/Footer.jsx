// components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    // Removed px-8 and container mx-auto
    <footer className="py-4 bg-gray-200 text-gray-600 w-full">
      <div className="flex justify-between items-center text-sm px-8"> {/* Added px-8 for content */}
        <p>© 2025 ConceptCore. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;