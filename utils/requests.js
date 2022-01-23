const API_KEY = process.env.API_KEY;

export default {
  fetchALL: {
    title: "ALL",
    url: "/",
  },
  fetchElectronics: {
    title: "electronics",
    url: "/category/electronics",
  },

  fetchJjewelery: {
    title: "jewelery",
    url: "/category/jewelery",
  },
  fetchMen: {
    title: "Men",
    url: `/category/men's%20clothing`,
  },
  fetchWomen: {
    title: "Women",
    url: `/category/women's%20clothing`,
  },
};
