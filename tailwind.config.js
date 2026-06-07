/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        magic: {
          purple: "#6B21A8",
          purpleLight: "#8B5CF6",
          purpleDark: "#4C1D95",
          green: "#166534",
          greenLight: "#22C55E",
          gold: "#EAB308",
          goldLight: "#FACC15",
        },
        night: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
        mist: {
          purple: "#1E1B4B",
        },
        glass: {
          purple: "rgba(139, 92, 246, 0.1)",
          purpleHover: "rgba(139, 92, 246, 0.2)",
        },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', "STKaiti", "serif"],
        body: ['"Noto Sans SC"', "PingFang SC", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        magic: "0 0 30px rgba(139, 92, 246, 0.3)",
        magicHover: "0 0 40px rgba(139, 92, 246, 0.5)",
        gold: "0 0 20px rgba(234, 179, 8, 0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse_glow: "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};
