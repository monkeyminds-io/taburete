/**
 * drop-down.js
 * ----------------
 * DESCRIPTION:
 * This file contains the functionality to:
 *   -> Open and close the drop down
 *   -> Handle options on click event
 *
 * AUTHOR: Pau Ferrer @ Minimal Designs
 * CREATED AT: 24/04/2023
 * LAST UPDATE: 24/04/2023
 */
// SYSTEM VARIABLES ////////////////
const DEFAULT_PARAMS = {
  keys: ["category", "order"],
  values: ["all", "most-popular"],
};

// IMPORTS ////////////////
import { getSearchParams } from "../helpers/page.js";

// FUNCTIONS ////////////////
/**
 * Used to open and close the drop down
 * @param {HTMLElement} dropDown
 */
const toggleDropDown = (dropDown) => {
  const handle = dropDown.querySelector('[data-element="handle"');
  handle.onclick = (e) => {
    e.preventDefault();
    const clickables = [handle, ...handle.children];
    clickables.forEach((clickable) => {
      if (e.target === clickable) {
        dropDown.classList.toggle("opened");
        handle.children[1].classList.toggle("opened");
      }
    });
  };
};

/**
 * Used to set the event on selecting an option from the drop down
 * @param {HTMLElement} dropDown
 */
const selectOption = (dropDown) => {
  const content = dropDown.querySelector('[data-element="content"');
  const key = dropDown.getAttribute("data-name");
  content.onclick = (e) => {
    e.preventDefault();
    const options = [...content.children];
    options.forEach((option) => {
      if (e.target === option) {
        const value = option.getAttribute("data-value");
        window.location.replace(setUrl(key, value));
      }
    });
  };
};

/**
 * Used to set the URL to redirect to on selection event
 * @param {String} key
 * @param {String} newValue
 * @returns {String}
 */
const setUrl = (key, newValue) => {
  const urlRoot = window.location.href.split("?")[0];
  const searchParams = getSearchParams();
  let values = [];
  let newParams = "?";
  DEFAULT_PARAMS.keys.forEach((defaultKey, index) => {
    values[index] =
      defaultKey === key
        ? newValue
        : searchParams.has(defaultKey)
        ? searchParams.get(defaultKey)
        : DEFAULT_PARAMS.values[index];
  });
  values.forEach((value, index) => {
    newParams += `${DEFAULT_PARAMS.keys[index]}=${value}&`;
  });
  newParams = newParams.slice(0, -1);
  return urlRoot + newParams;
};

/**
 * Used to set the text in the drop down as the URL params
 * @param {HTMLElement} dropDown
 */
const setUrlParamsInDropDown = (dropDown) => {
  const params = getSearchParams();
  const handleSpan = dropDown.querySelector('[data-element="handle"')
    .children[0];
  const options = [
    ...dropDown.querySelector('[data-element="content"').children,
  ];
  options.forEach((option) => {
    if (
      option.getAttribute("data-value") ===
      params.get(dropDown.getAttribute("data-name"))
    ) {
      handleSpan.textContent = option.getAttribute("data-text");
    }
  });
};

// EXPORTS ////////////////
export const initDropDown = (dropDown) => {
  toggleDropDown(dropDown);
  selectOption(dropDown);
  if (window.location.href.includes("?")) {
    setUrlParamsInDropDown(dropDown);
  }
};
