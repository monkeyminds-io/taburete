/**
 * category-card.js
 * ----------------
 * DESCRIPTION:
 * This file contains the hovering event of the category cards.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 20/04/2023
 * LAST UPDATE: 20/04/2023
 */
// FUNCTIONS ////////////////
/**
 * Used to set the mouse over event in the category card
 * @param {HTMLElement} card
 */
const setMouseOverEvent = (card) => {
  const overlay = card.querySelector('[data-element="ovelay"]');
  const background = card.querySelector('[data-element="background"]');
  card.onmouseover = (e) => {
    overlay.classList.add("hovering");
    background.classList.add("hovering");
  };
};

/**
 * Used to set the mouse out event in the category card
 * @param {HTMLElement} card
 */
const setMouseOutEvent = (card) => {
  const overlay = card.querySelector('[data-element="ovelay"]');
  const background = card.querySelector('[data-element="background"]');
  card.onmouseout = (e) => {
    overlay.classList.remove("hovering");
    background.classList.remove("hovering");
  };
};

// EXPORTS ////////////////
export const initCategoryCards = (cards) => {
  cards.forEach((card) => {
    setMouseOverEvent(card);
    setMouseOutEvent(card);
  });
};
