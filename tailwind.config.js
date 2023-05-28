module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray_400: "#8e8e8e",
        blue_gray_900_b2: "#333334b2",
        teal_50: "#dceee8",
        blue_gray_900_7f: "#3333347f",
        black_900_3f: "#0000003f",
        teal_200: "#98ccbb",
        white_A700_00: "#ffffff00",
        black_900: "#000000",
        blue_gray_700: "#326655",
        blue_gray_900_01: "#333334",
        teal_50_01: "#ddeee8",
        blue_gray_900: "#214438",
        white_A700: "#ffffff",
      },
      fontFamily: {
        karla: "Karla",
        playfairdisplay: "Playfair Display",
        inter: "Inter",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff00,#ddeee8)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
