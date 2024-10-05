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

//update favorites in the context state only for instante response
export const updateFavorites = (id, favorites) => {
  if (favorites.includes(id)) {
    return favorites.filter((propId) => propId !== id);
  } else {
    return [...favorites, id];
  }
};
// check if property is in favorites
export const checkFavorites = (id, favorites) => {
  return favorites?.includes(id) ? "#FF0000" : "white";
};

//validate string function

export const validateString = (value) => {
  return value === ""
    ? "This field is required"
    : value.length < 3
    ? "This field must be at least 3 characters long"
    : null;
};
