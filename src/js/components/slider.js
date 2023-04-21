/**
 * slider.js
 * ----------------
 * DESCRIPTION:
 * This file contains the functionality for the slider to slide.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 20/04/2023
 * LAST UPDATE: 20/04/2023
 */
// VARIABLES ////////////////
let currentSlide = 0;
let increment = 0;

// FUNCTIONS ////////////////
const slideMask = (mask) => {
  mask.style.transform = `translateX(${increment}px)`;
};

const setPreviousClickEvent = (mask, previous) => {
  const clickables = [previous, ...previous.children];
  previous.onclick = (e) => {
    e.preventDefault();
    e.preventDefault();
    increment = increment + (480 + 32); // TODO Make numbers dynamic
    clickables.forEach((clickable) => {
      if (e.target === clickable) {
        slideMask(mask);
      }
    });
    // TODO disable button if currentSlide = 0
    // TODO Undisable prev btn if currentSlide > 0
    currentSlide--;
  };
};

const setNextClickEvent = (mask, next) => {
  const clickables = [next, ...next.children];
  next.onclick = (e) => {
    e.preventDefault();
    increment = increment - (480 + 32); // TODO Make numbers dynamic
    clickables.forEach((clickable) => {
      if (e.target === clickable) {
        slideMask(mask);
      }
    });
    // TODO disable button if currentSlide = 2
    // TODO Undisable next btn if currentSlide < 2
    currentSlide++;
  };
};

// EXPORTS ////////////////
export const initSliders = () => {
  const sliders = document.querySelectorAll('[data-component="slider"]');
  sliders.forEach((slider) => {
    const mask = slider.querySelector('[data-element="slider-mask"]');
    const previous = slider.querySelector('[data-element="button-previous"]');
    const next = slider.querySelector('[data-element="button-next"]');
    setPreviousClickEvent(mask, previous);
    setNextClickEvent(mask, next);
  });
};
