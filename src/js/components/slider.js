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
// EXPORTS ////////////////
export const initSliders = (slider) => {
  // VARIABLES ////////////////
  let currentSlide = 0;
  let currentIncrement = 0;
  let lastSlide;
  let increment;

  // FUNCTIONS ////////////////
  /**
   * Used to move the slider mask in the X axis
   * @param {HTMLElement} mask
   */
  const slideMask = (mask) => {
    mask.style.transform = `translateX(${currentIncrement}px)`;
  };

  /**
   * Used to enable the slider button
   * @param {HTMLElement} button
   */
  const enableButton = (button) => {
    button.classList.remove("disabled");
  };

  /**
   * Used to disable the slider button
   * @param {HTMLElement} button
   */
  const disableButton = (button) => {
    button.classList.add("disabled");
  };

  /**
   * Used to set the active dot
   * @param {NodeList} dots
   */
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

  /**
   * Used to set the event in the previous button
   * @param {HTMLElement} mask
   * @param {HTMLElement} slides
   * @param {HTMLElement} previous
   * @param {NodeList} dots
   */
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

  /**
   * Used to set the event in the next button
   * @param {HTMLElement} mask
   * @param {HTMLElement} slides
   * @param {HTMLElement} previous
   * @param {NodeList} dots
   */
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

  // LOGIC ////////////////
  const mask = slider.querySelector('[data-element="slider-mask"]');
  const slides = mask.children;
  const dots = slider.querySelectorAll('[data-element="dot"]');
  const previous = slider.querySelector('[data-element="button-previous"]');
  const next = slider.querySelector('[data-element="button-next"]');
  lastSlide = slides.length - 1;
  setPreviousClickEvent(mask, slides, previous, dots);
  setNextClickEvent(mask, slides, next, dots);

  // This resets the slider on screen resice event
  window.onresize = (e) => {
    currentSlide = 0;
    currentIncrement = 0;
    slideMask(mask);
    setCurrentDot(dots);
    disableButton(previous);
    enableButton(next);
  };
};
