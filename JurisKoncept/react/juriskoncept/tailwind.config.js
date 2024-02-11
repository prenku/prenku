/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      colors: {
        brand: "#c1913f",
        navyBlue: "#011228",
        // navyBlue: "#293A4E",
        lightGrey: "#FFFFFF",
        lightPink: "#EAD0CA",
        purple: "#741B47",
        // darkBlue: "#293A4E",
        darkBlue: "#011228",
        // No need to spread default colors since they are already included by default
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
