// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          // Add your custom breakpoint here
          'xl_custom': '1250px', // This is the new breakpoint
        },
      },
    },
    plugins: [],
  }