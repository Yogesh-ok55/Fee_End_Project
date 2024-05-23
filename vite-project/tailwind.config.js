/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {},
    screens: {
      'ss':'750px',
      'sm': '640px',   // Small screens, mobile devices
      'md': '768px',   // Medium screens, tablets
      'lg': '1024px',  // Large screens, laptops
      'xl': '1280px',  // Extra large screens, desktops
      '2xl': '1536px', // Extra extra large screens, large desktops
      // Add more custom breakpoints if needed
    },
  },
  plugins: [],
}

