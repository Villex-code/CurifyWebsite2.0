/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",

    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
      mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      playfair: ["var(--font-playfair)"],
      faculty: ["var(--font-faculty)"],
    },

    colors: {
      background: "#f3f4f6",
      "teal-main": "#148D98",
      "teal-secondary": "#7ECFD7",
      "teal-third": "#096f79",
      "teal-accent": "#e7fcf9",
      "text-main": "#27272A",
      "text-secondary": "#71717A",
      "background-main": "#FFFFFF",
      "background-secondary": "#F6FEFF",
      "alert-red": "#E11D48",
      "warning-yellow": "#dabd2c",
      "success-green": "#2ba488",

      foreground: "",

      "color-1": "hsl(var(--color-1))",
      "color-2": "hsl(var(--color-2))",
      "color-3": "hsl(var(--color-3))",
      "color-4": "hsl(var(--color-4))",
      "color-5": "hsl(var(--color-5))",
    },

    keyframes: {
      rainbow: {
        "0%": { "background-position": "0%" },
        "100%": { "background-position": "200%" },
      },

      dash: {
        to: {
          strokeDashoffset: "1000",
        },
      },

      moveHorizontal: {
        "0%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
        "50%": {
          transform: "translateX(50%) translateY(10%)",
        },
        "100%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
      },

      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },

      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },

      ripple: {
        "0%, 100%": {
          transform: "translate(-50%, -50%) scale(1)",
        },
        "50%": {
          transform: "translate(-50%, -50%) scale(0.9)",
        },
      },

      shine: {
        "0%": {
          "background-position": "0% 0%",
        },
        "50%": {
          "background-position": "100% 100%",
        },
        to: {
          "background-position": "0% 0%",
        },
      },
    },

    animation: {
      ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      dash: "dash 20s linear infinite",
      rainbow: "rainbow var(--speed, 2s) infinite linear",
      first: "moveVertical 30s ease infinite",
      second: "moveInCircle 20s reverse infinite",
      third: "moveInCircle 40s linear infinite",
      fourth: "moveHorizontal 40s ease infinite",
      fifth: "moveInCircle 20s ease infinite",
      shine: "shine var(--duration) infinite linear",
    },
  },

  plugins: [
    addVariablesForColors,

    function ({ addUtilities }: any) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
