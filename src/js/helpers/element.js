/**
 * element.js
 * ----------------
 * DESCRIPTION:
 * This file contains a collection of handy functions related to HTML elements manipulation.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 22/04/2023
 * LAST UPDATE: 23/04/2023
 */
// CONSTANTS ////////////////
const REGULAR_EXPRESIONS = {
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
};

/**
 * Used to display a set modal and the overlay.
 * @param {HTMLElement} modal
 * @param {HTMLElement} overlay
 */
const displayModal = (modal, overlay) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

/**
 * Used to close a set modal and the overlay.
 * @param {HTMLElement} modal
 * @param {HTMLElement} overlay
 */
const closeModal = (modal, overlay) => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// TODO Validate data in form!!
/**
 * Used to check if an input is emapty
 *  -> TRUE = NOT EMPTY
 *  -> FALSE = EMPTY
 * @param {HTMLElement} input
 * @returns
 */
const isInputNotEmpty = (input) => {
  return input.value != "" ? true : false;
};

/**
 * Used to validate if an inputed email is valid
 *  -> TRUE = VALID
 *  -> FALSE = NOT VALID
 * @param {String} email
 * @returns
 */
const isEmailValid = (email) => {
  return email.toLowerCase().match(REGULAR_EXPRESIONS.email) ? true : false;
};

/**
 * Used to display tghe feedback message after inpur validation.
 * @param {HTMLElement} formBlock
 * @param {Object} feedback
 * @param {Boolean} isValid
 */
const displayValidationFeedback = (input, feedback, isValid) => {
  const feedbackBlock = input.nextElementSibling;
  if (isValid) {
    feedbackBlock.textContent = feedback.success;
    feedbackBlock.classList.remove("error");
    feedbackBlock.classList.add("success");
  } else {
    feedbackBlock.textContent = feedback.error;
    feedbackBlock.classList.remove("success");
    feedbackBlock.classList.add("error");
  }
};

export {
  displayModal,
  closeModal,
  isInputNotEmpty,
  isEmailValid,
  displayValidationFeedback,
};
