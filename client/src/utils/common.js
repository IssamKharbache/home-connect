export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

export const updateFavorites = (id, favorites) => {
  if (favorites.includes(id)) {
    return favorites.filter((propId) => propId !== id);
  } else {
    return [...favorites, id];
  }
};

export const checkFavorites = (id, favorites) => {
  return favorites?.includes(id) ? "#FF0000" : "white";
};
