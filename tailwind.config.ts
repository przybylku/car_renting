import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-sky": 'url("../public/blue-sky.jpg")',
        contact: "url('../public/contact.jpg')",
        contact2: "url('../public/contact2.png')",
      },
      boxShadow: {
        contact: "0px 0px 40px -15px var(--tw-shadow)",
        contactThic: "0px 0px 60px 0px var(--tw-shadow)",
      },
      backgroundSize: {
        "50-100": "50% 100%",
      },
      colors: {
        palette: {
          100: "#FFC15E",
          200: "#F7B05B",
          300: "#F7934C",
          400: "#CC5803",
          500: "#1F1300",
        },
        gradientColorStops: {
          darkBlue: "rgba(64,55,217,1)",
          lightBlue: "rgba(91,91,255,1)",
          lastColor: "rgba(0,212,255,0.2)",
        },
      },
      screens: {
        mmd: { max: "874px" },
        mnd: { max: "1358px" },
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
