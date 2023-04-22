/**
 * navbar.js
 * ----------------
 * DESCRIPTION:
 * This file contains the functionality to:
 *   -> Open menu and animate burger
 *   -> Set the current page in menu link
 *   -> Change navbar background to white on scroll
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 22/04/2023
 * LAST UPDATE: 22/04/2023
 */
// IMPORTS ////////////////
import { getPageFromUrl } from "../helpers/page.js";

// FUNCTIONS ////////////////
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
        window.scrollY === 0 ? navbar.classList.toggle("white") : null;
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
    if (getPageFromUrl() === page) {
      navbar.querySelector(`[data-page="${page}"]`).classList.add("current");
    }
  });
};

// EXPORTS ////////////////
export const initNavbar = (navbar) => {
  openMenu(navbar);
  setCurrent(navbar);
  window.onscroll = () => {
    window.scrollY > 0
      ? navbar.classList.add("white")
      : navbar.classList.remove("white");
  };
};
