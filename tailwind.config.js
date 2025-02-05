/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Dancing Script", "cursive"], // Add your custom cursive font here
        pacifico: ["Pacifico", "serif"],
        lilitaOne: ["Lilita One", "serif"],
        gruppo: ["Gruppo", "serif"],
        rubikMicrobe: ["Rubik Microbe", "serif"],
        londrinaSolid: ["Londrina Solid", "serif"],
        mplusrounded: ["M PLUS Rounded 1c", "serif"],
        acme: ["Acme", "serif"],
      },

      screens: {
        macbookAir: { max: "1280px", min: "800px" }, // Custom screen for MacBook Air
      },

      colors: {
        "matte-black": "#2b2b2b",
        "main-background": "#141416",
        "project-card-color": "#533f4d",
        "main-color": "#ffffff",
        "desc-color": "#dfd5c7",
        "skills-color": "#ffffff",
        "logo-color": "#bd9cac",
        "nav-text-color": "#17252a",
        "media-color": "#343a40",
        "cta-primary": "#a3492f",
        "cta-secondary": "#EE7C53",
        "custom-conic":
          "conic-gradient(rgba(133, 31, 84, 0.705) 0deg, rgba(192, 132, 252, 0.4) 0deg, transparent 145deg)",
      },
      animation: {
        borderSpin: "borderspin 7s linear infinite",
        typing:
          "typing 3s steps(32, end) forwards, blink 0.7s step-end infinite",

        slideRight: "slideRight 2s ease-in-out",
        slideLeft: "slideLeft 2s ease-in-out",
        "translate-y-in-100":
          "translate-y-in-100 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      keyframes: {
        borderspin: {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },

        "translate-y-in-100": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-600px)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(800px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animation-delay"),
    require("tailwindcss-motion"),
    require("tailwindcss-intersect"),
  ],
  darkMode: "selector",
};
