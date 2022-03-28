module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gabriela: ["Gabriela"],
        urbanist: ['Urbanist', "sans-serif"],
        "roboto-slap": ['Roboto Slab', "serif"]
      },
      colors: {
        "Index-green":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), rgba(179, 215, 115, 0.5)",
        "index-navbar":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #B3D773 0%, rgba(179, 215, 115, 0) 100%)",
        btn: "rgba(179, 215, 115, 1)",
      },
    },
  },
  plugins: [],
};
