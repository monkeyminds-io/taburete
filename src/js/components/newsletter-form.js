/**
 * newsletter-form.js
 * ----------------
 * DESCRIPTION:
 * This file contains the functionality to:
 *   -> Validate data inputed in form
 *   -> Open success message modal on submit
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 22/04/2023
 * LAST UPDATE: 23/04/2023
 */
// IMPORTS ////////////////
import {
  isInputNotEmpty,
  isEmailValid,
  displayValidationFeedback,
  displayModal,
  closeModal,
} from "../helpers/element.js";

// FUNCTIONS ////////////////
/**
 * Used to check if email inputed is a valid email and give feedback to the user
 * @param {HTMLElement} emailInput
 */
const checkValidEmail = (emailInput) => {
  const feedback = {
    success: "This email is valid!",
    error: "The email is not valid.",
  };
  const isValid = isEmailValid(emailInput.value);
  displayValidationFeedback(emailInput, feedback, isValid);
  return isValid ? true : false;
};

/**
 * Used to validate email input as:
 *  -> Is input empty?
 *  -> Is value a valid email?
 * @param {HTMLElement} emailInput
 */
const validateEmail = (emailInput) => {
  const feedback = {
    success: "Thanks for filling your email.",
    error: "The email field is required.",
  };
  const isValid = isInputNotEmpty(emailInput);
  if (isValid) {
    return checkValidEmail(emailInput);
  } else {
    displayValidationFeedback(emailInput, feedback, isValid);
    return false;
  }
};

/**
 * Used to reset the form input values.
 * @param {HTMLElement} emailInput
 * @param {HTMLElement} modal
 * @param {HTMLElement} overlay
 */
const resetForm = (emailInput, modal, overlay) => {
  closeModal(modal, overlay);
  emailInput.value = "";
  emailInput.nextElementSibling.textContent = "";
};

// EXPORTS ////////////////
export const initNewsletterForm = (form, modal, overlay) => {
  const emailInput = form.querySelector("#email");

  // VALIDATE INPUTS ON THE FLY ////////////////
  emailInput.onchange = (e) => {
    validateEmail(emailInput);
  };

  // SUBMIT EVENT ////////////////
  form.onsubmit = (e) => {
    e.preventDefault();
    validateEmail(emailInput) ? displayModal(modal, overlay) : null;
  };

  // CLOSE MODAL EVENT ////////////////
  modal.querySelector("a").onclick = (e) => {
    e.preventDefault();
    resetForm(emailInput, modal, overlay);
  };

  overlay.onclick = (e) => {
    e.preventDefault();
    resetForm(emailInput, modal, overlay);
  };
};
