/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://taburete-website/./src/sass/styles.scss?");

/***/ }),

/***/ "./src/js/components/category-card.js":
/*!********************************************!*\
  !*** ./src/js/components/category-card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCategoryCards\": () => (/* binding */ initCategoryCards)\n/* harmony export */ });\n/**\n * category-card.js\n * ----------------\n * DESCRIPTION:\n * This file contains the hovering event of the category cards.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 20/04/2023\n * LAST UPDATE: 20/04/2023\n */\n// FUNCTIONS ////////////////\n/**\n * Used to set the mouse over event in the category card\n * @param {HTMLElement} card\n */\nconst setMouseOverEvent = (card) => {\n  const overlay = card.querySelector('[data-element=\"ovelay\"]');\n  const background = card.querySelector('[data-element=\"background\"]');\n  card.onmouseover = (e) => {\n    overlay.classList.add(\"hovering\");\n    background.classList.add(\"hovering\");\n  };\n};\n\n/**\n * Used to set the mouse out event in the category card\n * @param {HTMLElement} card\n */\nconst setMouseOutEvent = (card) => {\n  const overlay = card.querySelector('[data-element=\"ovelay\"]');\n  const background = card.querySelector('[data-element=\"background\"]');\n  card.onmouseout = (e) => {\n    overlay.classList.remove(\"hovering\");\n    background.classList.remove(\"hovering\");\n  };\n};\n\n// EXPORTS ////////////////\nconst initCategoryCards = (cards) => {\n  cards.forEach((card) => {\n    setMouseOverEvent(card);\n    setMouseOutEvent(card);\n  });\n};\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/category-card.js?");

/***/ }),

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initNavbar\": () => (/* binding */ initNavbar)\n/* harmony export */ });\n/* harmony import */ var _helpers_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/page.js */ \"./src/js/helpers/page.js\");\n/**\n * navbar.js\n * ----------------\n * DESCRIPTION:\n * This file contains the functionality to:\n *   -> Open menu and animate burger\n *   -> Set the current page in menu link\n *   -> Change navbar background to white on scroll\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 22/04/2023\n */\n// IMPORTS ////////////////\n\n\n// FUNCTIONS ////////////////\n/**\n * Used to open the navbar menu\n * @param {HTMLElement} navbar\n */\nconst openMenu = function (navbar) {\n  const burger = navbar.querySelector('[data-element=\"nav-burger\"]');\n  const menu = navbar.querySelector('[data-element=\"nav-menu\"]');\n  const clickables = [burger, ...burger.children];\n  navbar.onclick = (e) => {\n    clickables.forEach((clicable) => {\n      if (e.target === clicable) {\n        burger.classList.toggle(\"open\");\n        menu.classList.toggle(\"open\");\n        window.scrollY === 0 ? navbar.classList.toggle(\"white\") : null;\n      }\n    });\n  };\n};\n\n/**\n * Used to set the current page in the navbar menu\n * @param {HTMLElement} navbar\n */\nconst setCurrent = function (navbar) {\n  const pages = [\"shop\", \"contact-us\", \"register-login\", \"blog\"];\n  pages.forEach((page) => {\n    if ((0,_helpers_page_js__WEBPACK_IMPORTED_MODULE_0__.getPageFromUrl)() === page) {\n      navbar.querySelector(`[data-page=\"${page}\"]`).classList.add(\"current\");\n    }\n  });\n};\n\n// EXPORTS ////////////////\nconst initNavbar = (navbar) => {\n  openMenu(navbar);\n  setCurrent(navbar);\n  window.onscroll = () => {\n    window.scrollY > 0\n      ? navbar.classList.add(\"white\")\n      : navbar.classList.remove(\"white\");\n  };\n};\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/components/newsletter-form.js":
/*!**********************************************!*\
  !*** ./src/js/components/newsletter-form.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initNewsletterForm\": () => (/* binding */ initNewsletterForm)\n/* harmony export */ });\n/* harmony import */ var _helpers_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/element.js */ \"./src/js/helpers/element.js\");\n/**\n * newsletter-form.js\n * ----------------\n * DESCRIPTION:\n * This file contains the functionality to:\n *   -> Validate data inputed in form\n *   -> Open success message modal on submit\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 23/04/2023\n */\n// IMPORTS ////////////////\n\n\n// FUNCTIONS ////////////////\n/**\n * Used to check if email inputed is a valid email and give feedback to the user\n * @param {HTMLElement} emailInput\n */\nconst checkValidEmail = (emailInput) => {\n  const feedback = {\n    success: \"This email is valid!\",\n    error: \"The email is not valid.\",\n  };\n  const isValid = (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.isEmailValid)(emailInput.value);\n  (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.displayValidationFeedback)(emailInput, feedback, isValid);\n  return isValid ? true : false;\n};\n\n/**\n * Used to validate email input as:\n *  -> Is input empty?\n *  -> Is value a valid email?\n * @param {HTMLElement} emailInput\n */\nconst validateEmail = (emailInput) => {\n  const feedback = {\n    success: \"Thanks for filling your email.\",\n    error: \"The email field is required.\",\n  };\n  const isValid = (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.isInputNotEmpty)(emailInput);\n  if (isValid) {\n    return checkValidEmail(emailInput);\n  } else {\n    (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.displayValidationFeedback)(emailInput, feedback, isValid);\n    return false;\n  }\n};\n\nconst resetForm = (emailInput, modal, overlay) => {\n  (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal, overlay);\n  emailInput.value = \"\";\n  emailInput.nextElementSibling.textContent = \"\";\n};\n\n// EXPORTS ////////////////\nconst initNewsletterForm = (form, modal, overlay) => {\n  const emailInput = form.querySelector(\"#email\");\n\n  // VALIDATE INPUTS ON THE FLY ////////////////\n  emailInput.onchange = (e) => {\n    validateEmail(emailInput);\n  };\n\n  // SUBMIT EVENT ////////////////\n  form.onsubmit = (e) => {\n    e.preventDefault();\n    validateEmail(emailInput) ? (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.displayModal)(modal, overlay) : null;\n  };\n\n  // CLOSE MODAL EVENT ////////////////\n  modal.querySelector(\"a\").onclick = (e) => {\n    e.preventDefault();\n    resetForm(emailInput, modal, overlay);\n  };\n\n  overlay.onclick = (e) => {\n    e.preventDefault();\n    resetForm(emailInput, modal, overlay);\n  };\n};\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/newsletter-form.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSliders\": () => (/* binding */ initSliders)\n/* harmony export */ });\n/**\n * slider.js\n * ----------------\n * DESCRIPTION:\n * This file contains the functionality for the slider to slide.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 20/04/2023\n * LAST UPDATE: 20/04/2023\n */\n// EXPORTS ////////////////\nconst initSliders = (slider) => {\n  // VARIABLES ////////////////\n  let currentSlide = 0;\n  let currentIncrement = 0;\n  let lastSlide;\n  let increment;\n\n  // FUNCTIONS ////////////////\n  /**\n   * Used to move the slider mask in the X axis\n   * @param {HTMLElement} mask\n   */\n  const slideMask = (mask) => {\n    mask.style.transform = `translateX(${currentIncrement}px)`;\n  };\n\n  /**\n   * Used to enable the slider button\n   * @param {HTMLElement} button\n   */\n  const enableButton = (button) => {\n    button.classList.remove(\"disabled\");\n  };\n\n  /**\n   * Used to disable the slider button\n   * @param {HTMLElement} button\n   */\n  const disableButton = (button) => {\n    button.classList.add(\"disabled\");\n  };\n\n  /**\n   * Used to set the active dot\n   * @param {NodeList} dots\n   */\n  const setCurrentDot = (dots) => {\n    dots.forEach((dot, index) => {\n      dot.classList.remove(\"active\");\n      dot.setAttribute(\"data-is-active\", \"false\");\n      if (index === currentSlide) {\n        dot.classList.add(\"active\");\n        dot.setAttribute(\"data-is-active\", \"true\");\n      }\n    });\n  };\n\n  /**\n   * Used to set the event in the previous button\n   * @param {HTMLElement} mask\n   * @param {HTMLElement} slides\n   * @param {HTMLElement} previous\n   * @param {NodeList} dots\n   */\n  const setPreviousClickEvent = (mask, slides, previous, dots) => {\n    const clickables = [previous, ...previous.children];\n    previous.onclick = (e) => {\n      e.preventDefault();\n      increment = slides[0].offsetWidth + 32;\n      currentIncrement = currentIncrement + increment;\n      clickables.forEach((clickable) => {\n        if (e.target === clickable) {\n          slideMask(mask);\n          currentSlide--;\n          enableButton(previous.nextElementSibling);\n          currentSlide === 0 ? disableButton(previous) : null;\n          setCurrentDot(dots);\n        }\n      });\n    };\n  };\n\n  /**\n   * Used to set the event in the next button\n   * @param {HTMLElement} mask\n   * @param {HTMLElement} slides\n   * @param {HTMLElement} previous\n   * @param {NodeList} dots\n   */\n  const setNextClickEvent = (mask, slides, next, dots) => {\n    const clickables = [next, ...next.children];\n    next.onclick = (e) => {\n      e.preventDefault();\n      increment = slides[0].offsetWidth + 32;\n      currentIncrement = currentIncrement - increment;\n      clickables.forEach((clickable) => {\n        if (e.target === clickable) {\n          slideMask(mask);\n          currentSlide++;\n          enableButton(next.previousElementSibling);\n          currentSlide === lastSlide ? disableButton(next) : null;\n          setCurrentDot(dots);\n        }\n      });\n    };\n  };\n\n  // LOGIC ////////////////\n  const mask = slider.querySelector('[data-element=\"slider-mask\"]');\n  const slides = mask.children;\n  const dots = slider.querySelectorAll('[data-element=\"dot\"]');\n  const previous = slider.querySelector('[data-element=\"button-previous\"]');\n  const next = slider.querySelector('[data-element=\"button-next\"]');\n  lastSlide = slides.length - 1;\n  setPreviousClickEvent(mask, slides, previous, dots);\n  setNextClickEvent(mask, slides, next, dots);\n\n  // This resets the slider on screen resice event\n  window.onresize = (e) => {\n    currentSlide = 0;\n    currentIncrement = 0;\n    slideMask(mask);\n    setCurrentDot(dots);\n    disableButton(previous);\n    enableButton(next);\n  };\n};\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar.js */ \"./src/js/components/navbar.js\");\n/* harmony import */ var _components_category_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/category-card.js */ \"./src/js/components/category-card.js\");\n/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider.js */ \"./src/js/components/slider.js\");\n/* harmony import */ var _components_newsletter_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/newsletter-form.js */ \"./src/js/components/newsletter-form.js\");\n/**\n * global.js\n * ----------------\n * DESCRIPTION:\n * This file contains the functionality for the all components in the website to work.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 23/04/2023\n */\n// NAVBAR FUNCTIONALITY\n\nconst navbar = document.querySelector('[data-component=\"navbar\"]');\n(0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__.initNavbar)(navbar);\n\n// CATEGORY CARDS - HOVER EVENT ////////////////\n\nconst categoryCards = document.querySelectorAll(\n  '[data-component=\"category-card\"]'\n);\ncategoryCards != null ? (0,_components_category_card_js__WEBPACK_IMPORTED_MODULE_1__.initCategoryCards)(categoryCards) : null;\n\n// SLIDERS FUNCTIONALITY ////////////////\n\nconst sliders = document.querySelectorAll('[data-component=\"slider\"]');\nsliders != null\n  ? sliders.forEach((slider) => {\n      (0,_components_slider_js__WEBPACK_IMPORTED_MODULE_2__.initSliders)(slider);\n    })\n  : null;\n\n// NEWSLETTER FORM - SUBMIT EVENT ////////////////\n\nconst newsletterForm = document.querySelector(\n  '[data-component=\"newsletter-form\"]'\n);\nconst newsletterModal = document.querySelector(\n  '[data-component=\"newsletter-modal\"]'\n);\nconst overlay = document.querySelector('[data-component=\"overlay\"]');\nnewsletterForm != null\n  ? (0,_components_newsletter_form_js__WEBPACK_IMPORTED_MODULE_3__.initNewsletterForm)(newsletterForm, newsletterModal, overlay)\n  : null;\n\n\n//# sourceURL=webpack://taburete-website/./src/js/global.js?");

/***/ }),

/***/ "./src/js/helpers/element.js":
/*!***********************************!*\
  !*** ./src/js/helpers/element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"displayModal\": () => (/* binding */ displayModal),\n/* harmony export */   \"displayValidationFeedback\": () => (/* binding */ displayValidationFeedback),\n/* harmony export */   \"isEmailValid\": () => (/* binding */ isEmailValid),\n/* harmony export */   \"isInputNotEmpty\": () => (/* binding */ isInputNotEmpty)\n/* harmony export */ });\n/**\n * element.js\n * ----------------\n * DESCRIPTION:\n * This file contains a collection of handy functions related to HTML elements manipulation.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 23/04/2023\n */\n// CONSTANTS ////////////////\nconst REGULAR_EXPRESIONS = {\n  email:\n    /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/i,\n};\n\n/**\n * Used to display a set modal and the overlay.\n * @param {HTMLElement} modal\n * @param {HTMLElement} overlay\n */\nconst displayModal = (modal, overlay) => {\n  modal.classList.remove(\"hidden\");\n  overlay.classList.remove(\"hidden\");\n};\n\n/**\n * Used to close a set modal and the overlay.\n * @param {HTMLElement} modal\n * @param {HTMLElement} overlay\n */\nconst closeModal = (modal, overlay) => {\n  modal.classList.add(\"hidden\");\n  overlay.classList.add(\"hidden\");\n};\n\n// TODO Validate data in form!!\n/**\n * Used to check if an input is emapty\n *  -> TRUE = NOT EMPTY\n *  -> FALSE = EMPTY\n * @param {HTMLElement} input\n * @returns\n */\nconst isInputNotEmpty = (input) => {\n  return input.value != \"\" ? true : false;\n};\n\n/**\n * Used to validate if an inputed email is valid\n *  -> TRUE = VALID\n *  -> FALSE = NOT VALID\n * @param {String} email\n * @returns\n */\nconst isEmailValid = (email) => {\n  return email.toLowerCase().match(REGULAR_EXPRESIONS.email) ? true : false;\n};\n\n/**\n * Used to display tghe feedback message after inpur validation.\n * @param {HTMLElement} formBlock\n * @param {Object} feedback\n * @param {Boolean} isValid\n */\nconst displayValidationFeedback = (input, feedback, isValid) => {\n  const feedbackBlock = input.nextElementSibling;\n  if (isValid) {\n    feedbackBlock.textContent = feedback.success;\n    feedbackBlock.classList.remove(\"error\");\n    feedbackBlock.classList.add(\"success\");\n  } else {\n    feedbackBlock.textContent = feedback.error;\n    feedbackBlock.classList.remove(\"success\");\n    feedbackBlock.classList.add(\"error\");\n  }\n};\n\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/helpers/element.js?");

/***/ }),

/***/ "./src/js/helpers/page.js":
/*!********************************!*\
  !*** ./src/js/helpers/page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPageFromUrl\": () => (/* binding */ getPageFromUrl)\n/* harmony export */ });\n/**\n * page.js\n * ----------------\n * DESCRIPTION:\n * This file contains a collection of handy functions related to page manipilation.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 22/04/2023\n */\nconst getPageFromUrl = function () {\n  const url = window.location.href;\n  const page = url.split(\"/\")[url.split(\"/\").length - 1].split(\".\")[0];\n  return page;\n};\n\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/helpers/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/global.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/styles.scss");
/******/ 	
/******/ })()
;