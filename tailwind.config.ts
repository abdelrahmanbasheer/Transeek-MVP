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
      gtext:"#454545"

    },
    backgroundImage:{
      "hero-image":"url('/hero-image.png')",
      "filter-image":"url('/filter-hero.png')",
      "filter-second-image":"url('/filter-second-image.jpg')",
      "warehouse-page-image":"url('/warehouse-page-bg.png')",
      
    },
     content:{
      'price':"url('/uil_exchange.png)",
    }
  }
  },
  plugins: [],
};
export default config;
