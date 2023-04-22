/**
 * element.js
 * ----------------
 * DESCRIPTION:
 * This file contains a collection of handy functions related to HTML elements manipulation.
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 22/04/2023
 * LAST UPDATE: 22/04/2023
 */
/**
 * Used to display a set modal and the overlay.
 * @param {HTMLElement} modal
 * @param {HTMLElement} overlay
 */
const displayModal = function (modal, overlay) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

/**
 * Used to close a set modal and the overlay.
 * @param {HTMLElement} modal
 * @param {HTMLElement} overlay
 */
const closeModal = function (modal, overlay) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// TODO Validate data in form!!
/**
 * Used to validate inputs based on the given rules
 * @param {Object} params The object that contains all the necessary data for validation of an input:
 *                              + isRequired (boolean)
 *                              + inputValue (any)
 *                              + validationRule (string)
 *                              + output (HTMLElement)
 * @returns {boolean} true if errors / false if not errors
 */
const validateInput = function (params) {
  let errorMessage;
  params.output.innerHTML = "";
  // Input required
  if (params.isRequired) {
    if (params.inputValue === "") {
      errorMessage = "This field is required.";
    } else {
      // No spaces
      if (params.validationRule === "no-spaces") {
        errorMessage = !params.inputValue.includes(" ")
          ? ""
          : "Remove all white spaces.";
      }
      // Must be 9 character
      else if (params.validationRule === "9-char") {
        errorMessage =
          params.inputValue.length === 9 ? "" : "Must be 9 charactes.";
      }
      // Burger size
      else if (params.validationRule === "burger-size") {
        errorMessage = PRICES.hasOwnProperty(params.inputValue)
          ? ""
          : "Must choose a size.";
      }
      // Max quantity 10
      else if (params.validationRule === "min-max-quantity") {
        errorMessage =
          parseInt(params.inputValue) < 1
            ? "Min quantity 1 burger."
            : parseInt(params.inputValue) > 10
            ? "Max quantity 10 burgers."
            : "";
      } else if (params.validationRule === "email") {
        errorMessage = params.inputValue
          .toLowerCase()
          .match(REGULAR_EXPRESIONS.email)
          ? ""
          : "Not a correct email.";
      }
    }
  }
  // Incorrect discount code
  else if (params.validationRule === "discount-code") {
    errorMessage =
      params.inputValue === ""
        ? ""
        : DISCOUNT_CODES.hasOwnProperty(params.inputValue)
        ? ""
        : "Incorrect discount code.";
  }
  if (errorMessage) {
    params.output.innerHTML = errorMessage;
    return true;
  }
  return false;
};

export { displayModal, closeModal };
