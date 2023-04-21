// NAVBAR FUNCTIONALITY
// Imports
import { openMenu, setCurrent } from "./components/navbar.js";
// TODO abstract to navbar.js and create initNavbar()
const navbar = document.querySelector('[data-component="navbar"]');
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
const sliders = document.querySelectorAll('[data-component="slider"]');
sliders.forEach((slider) => {
  initSliders(slider);
});
