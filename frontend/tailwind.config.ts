import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      "light"
      // {
      //   mytheme: {
      //     "primary": "#1d4ed8",
      //     "secondary": "#dfae00",
      //     "accent": "#047857",
      //     "neutral": "#292524",
      //     "base-100": "#f5f5f4",
      //     "info": "#7dd3fc",
      //     "success": "#4d7c0f",
      //     "warning": "#b91c1c",
      //     "error": "#fb7185",
      //   },
      // },
    ],
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
};
export default config;
