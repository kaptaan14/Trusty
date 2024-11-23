import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001B56",
        secondary: "#FF0000",
        textwhite: "#FFFFFF",
        line: "#D8D8D8"
      },
      fontFamily:{
        notosans : ["Noto Sans JP","sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
