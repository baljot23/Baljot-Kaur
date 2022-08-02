/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Blinker, sans-serif",
      body: "Blinker, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      content: {
        about: 'url("/src/images/Outlines/about.svg")',
        contact: 'url("/src/images/Outlines/contact.svg")',
        portfolio: 'url("/src/images/Outlines/portfolio.svg")',
        testimonials: 'url("/src/images/Outlines/testimonials.svg")',
        services: 'url("/src/images/Outlines/services.svg")',
      },
      colors: {
        primary: "#050402",
        secondary: "#1C1D24",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#a5b4fc",
          hover: "#925a2b",
        },
        paragraph: "#878e99",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        line: {
          "0%": {
            "background-position-x": "390px",
          },
        },
      },
    },
  },
  plugins: [],
};
