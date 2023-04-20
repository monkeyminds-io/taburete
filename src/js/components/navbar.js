// Imports
import { getPage } from "../helpers/page.js";

/**
 * Used to open the navbar menu
 * @param {HTMLElement} navbar
 */
const openMenu = function (navbar) {
  const burger = navbar.querySelector('[data-element="nav-burger"]');
  const menu = navbar.querySelector('[data-element="nav-menu"]');
  const clickables = [burger, ...burger.children];
  navbar.onclick = (e) => {
    clickables.forEach((clicable) => {
      if (e.target === clicable) {
        burger.classList.toggle("open");
        menu.classList.toggle("open");
      }
    });
  };
};

/**
 * Used to set the current page in the navbar menu
 * @param {HTMLElement} navbar
 */
const setCurrent = function (navbar) {
  const pages = ["shop", "contact-us", "register-login", "blog"];
  pages.forEach((page) => {
    if (getPage() === page) {
      navbar.querySelector(`[data-page="${page}"]`).classList.add("current");
    }
  });
};

// Exports
export { openMenu, setCurrent };
