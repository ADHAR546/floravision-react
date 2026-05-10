/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#d4f0d8",
          100: "#a8e0b0",
          200: "#7ecf5c",
          300: "#5cb96a",
          400: "#3a8a46",
          500: "#2a6632",
          600: "#1f4d24",
          700: "#1a3d1e",
          800: "#0f2412",
          900: "#0a1a0d",
        },
        accent: {
          DEFAULT: "#7ecf5c",
          hover: "#9ddb7e",
          muted: "rgba(126,207,92,0.15)",
        },
        gold: "#c9a84c",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 80% at 70% 50%, #153018 0%, #0a1a0d 60%)",
        "card-radial":
          "radial-gradient(ellipse at center, rgba(42,102,50,0.25), transparent)",
        "glass-border":
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
      },
      backdropBlur: {
        xs: "4px",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-up-1": "fadeUp 0.7s 0.1s ease forwards",
        "fade-up-2": "fadeUp 0.7s 0.2s ease forwards",
        "fade-up-3": "fadeUp 0.7s 0.3s ease forwards",
        "fade-up-4": "fadeUp 0.7s 0.4s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.5)",
        "card-hover": "0 20px 48px rgba(0,0,0,0.55)",
        "accent-glow": "0 8px 24px rgba(126,207,92,0.3)",
      },
    },
  },
  plugins: [],
};
