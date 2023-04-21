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
let currentIncrement = 0;
let lastSlide;
let increment;

// FUNCTIONS ////////////////
const slideMask = (mask) => {
  mask.style.transform = `translateX(${currentIncrement}px)`;
};

const enableButton = (button) => {
  button.classList.remove("disabled");
};

const disableButton = (button) => {
  button.classList.add("disabled");
};

const setCurrentDot = (dots) => {
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    dot.setAttribute("data-is-active", "false");
    if (index === currentSlide) {
      dot.classList.add("active");
      dot.setAttribute("data-is-active", "true");
    }
  });
};

const setPreviousClickEvent = (mask, slides, previous, dots) => {
  const clickables = [previous, ...previous.children];
  previous.onclick = (e) => {
    e.preventDefault();
    increment = slides[0].offsetWidth + 32;
    currentIncrement = currentIncrement + increment;
    clickables.forEach((clickable) => {
      if (e.target === clickable) {
        slideMask(mask);
        currentSlide--;
        enableButton(previous.nextElementSibling);
        currentSlide === 0 ? disableButton(previous) : null;
        setCurrentDot(dots);
      }
    });
  };
};

const setNextClickEvent = (mask, slides, next, dots) => {
  const clickables = [next, ...next.children];
  next.onclick = (e) => {
    e.preventDefault();
    increment = slides[0].offsetWidth + 32;
    currentIncrement = currentIncrement - increment;
    clickables.forEach((clickable) => {
      if (e.target === clickable) {
        slideMask(mask);
        currentSlide++;
        enableButton(next.previousElementSibling);
        currentSlide === lastSlide ? disableButton(next) : null;
        setCurrentDot(dots);
      }
    });
  };
};

// EXPORTS ////////////////
export const initSliders = () => {
  const sliders = document.querySelectorAll('[data-component="slider"]');
  sliders.forEach((slider) => {
    const mask = slider.querySelector('[data-element="slider-mask"]');
    const slides = mask.children;
    const dots = slider.querySelectorAll('[data-element="dot"]');
    const previous = slider.querySelector('[data-element="button-previous"]');
    const next = slider.querySelector('[data-element="button-next"]');
    lastSlide = slides.length - 1;
    setPreviousClickEvent(mask, slides, previous, dots);
    setNextClickEvent(mask, slides, next, dots);
    window.onresize = (e) => {
      currentSlide = 0;
      currentIncrement = 0;
      slideMask(mask);
      setCurrentDot(dots);
      disableButton(previous);
      enableButton(next);
    };
  });
};
