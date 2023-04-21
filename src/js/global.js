// NAVBAR FUNCTIONALITY
// Imports
import { openMenu, setCurrent } from "./components/navbar.js";
// DOM elements
const navbar = document.querySelector('[data-component="navbar"]');
// Logic
openMenu(navbar);
setCurrent(navbar);
window.onscroll = () => {
  window.scrollY > 0
    ? navbar.classList.add("white")
    : navbar.classList.remove("white");
};

// CATEGORY CARDS - HOVER EVENT ////////////////
import { initCategoryCards } from "./components/category-card.js";
initCategoryCards();

// SLIDERS FUNCTIONALITY ////////////////
import { initSliders } from "./components/slider.js";
initSliders();
