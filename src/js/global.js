/**
 * global.js
 * ----------------
 * DESCRIPTION:
 * This file contains the functionality for the all components in the website to work.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 22/04/2023
 * LAST UPDATE: 23/04/2023
 */
// NAVBAR FUNCTIONALITY
import { initNavbar } from "./components/navbar.js";
const navbar = document.querySelector('[data-component="navbar"]');
initNavbar(navbar);

// CATEGORY CARDS - HOVER EVENT ////////////////
import { initCategoryCards } from "./components/category-card.js";
const categoryCards = document.querySelectorAll(
  '[data-component="category-card"]'
);
categoryCards != null ? initCategoryCards(categoryCards) : null;

// SLIDERS FUNCTIONALITY ////////////////
import { initSliders } from "./components/slider.js";
const sliders = document.querySelectorAll('[data-component="slider"]');
sliders != null
  ? sliders.forEach((slider) => {
      initSliders(slider);
    })
  : null;

// NEWSLETTER FORM - SUBMIT EVENT ////////////////
import { initNewsletterForm } from "./components/newsletter-form.js";
const newsletterForm = document.querySelector(
  '[data-component="newsletter-form"]'
);
const newsletterModal = document.querySelector(
  '[data-component="newsletter-modal"]'
);
const overlay = document.querySelector('[data-component="overlay"]');
newsletterForm != null
  ? initNewsletterForm(newsletterForm, newsletterModal, overlay)
  : null;
