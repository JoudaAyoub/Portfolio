/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      smoke: "#FAFAFA",
      stroke: "#E6E6E6",
      primary: "#777777",
      secondary: "#32343A",
      headline: "#212121",
      subtext: "#A9A8A8",
      tech: "#4E4E4E",
      amber: "#FFB800",
      darkamber: "#FFA000",
    },
    fontFamily: {
      generalsans: ["General Sans"],
    },
    extend: {
      content: {
        foodicon: 'url("/foodicon.svg")',
        greenicon: 'url("/greenicon.svg")',
        reacticon: 'url("/reacticon.svg")',
        servicesfirst: 'url("/servicesfirst.svg")',
        serviceslast: 'url("/serviceslast.svg")',
        footerfirst: 'url("/footerfirst.svg")',
        footerlast: 'url("/footerlast.svg")',
      },
    },
  },
  plugins: [],
};
