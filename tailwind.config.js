export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#131A22",
        "light-gray": "#d1d5db",
        "dark-dray": "#4b5563",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      boxShadow: {
        "selected-card": "0 0 12px 0 rgba(0,0,0,.12)",
        "soft-shadow":
          "0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        xs: "446px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
