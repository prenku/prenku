/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "LailaBold",
          "LailaMedium",
          "LailaLight",
          // Add more fonts for fallback if needed
          "ui-sans-serif", // Default sans-serif font
          "system-ui", // Default system font
          "-apple-system", // Default Apple system font
          "BlinkMacSystemFont", // Default macOS system font
        ],
      },
      colors: {
        brand: "#c1913f",
        darkBlue: "#011228",
        lightGrey: "#FFFFFF",
        lightPink: "#EAD0CA",
        purple: "#741B47",
        // No need to spread default colors since they are already included by default
      },
    },
  },
  // Other configurations...
};
