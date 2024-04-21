import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
    colors:{
      primary:"#091242",
      secondary:"#BF473E",

    },
    backgroundImage:{
      "hero-image":"url('/hero-image.png')"
    }
  }
  },
  plugins: [],
};
export default config;
