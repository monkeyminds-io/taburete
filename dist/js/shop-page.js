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

/***/ "./src/js/helpers/data.js":
/*!********************************!*\
  !*** ./src/js/helpers/data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchJson\": () => (/* binding */ fetchJson)\n/* harmony export */ });\n/**\n * data.js\n * ----------------\n * DESCRIPTION:\n * This file contains a collection of handy functions related to data manipulation\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 22/04/2023\n */\n/**\n * Used to fetch json data from a url\n * @param {String} url\n * @param {Object} body\n * @returns {Promise} json\n */\nconst fetchJson = async function (url, body = {}) {\n  const response = await fetch(url, body);\n  const json = await response.json();\n  return json;\n};\n\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/helpers/data.js?");

/***/ }),

/***/ "./src/js/helpers/element.js":
/*!***********************************!*\
  !*** ./src/js/helpers/element.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone\": () => (/* binding */ clone),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"displayModal\": () => (/* binding */ displayModal),\n/* harmony export */   \"displayValidationFeedback\": () => (/* binding */ displayValidationFeedback),\n/* harmony export */   \"hide\": () => (/* binding */ hide),\n/* harmony export */   \"isEmailValid\": () => (/* binding */ isEmailValid),\n/* harmony export */   \"isInputNotEmpty\": () => (/* binding */ isInputNotEmpty),\n/* harmony export */   \"reveal\": () => (/* binding */ reveal)\n/* harmony export */ });\n/**\n * element.js\n * ----------------\n * DESCRIPTION:\n * This file contains a collection of handy functions related to HTML elements manipulation.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 23/04/2023\n */\n// CONSTANTS ////////////////\nconst REGULAR_EXPRESIONS = {\n  email:\n    /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/i,\n};\n\n/**\n * Used to display a set modal and the overlay.\n * @param {HTMLElement} modal\n * @param {HTMLElement} overlay\n */\nconst displayModal = (modal, overlay) => {\n  modal.classList.remove(\"hidden\");\n  overlay.classList.remove(\"hidden\");\n};\n\n/**\n * Used to close a set modal and the overlay.\n * @param {HTMLElement} modal\n * @param {HTMLElement} overlay\n */\nconst closeModal = (modal, overlay) => {\n  modal.classList.add(\"hidden\");\n  overlay.classList.add(\"hidden\");\n};\n\n/**\n * Used to check if an input is emapty\n *  -> TRUE = NOT EMPTY\n *  -> FALSE = EMPTY\n * @param {HTMLElement} input\n * @returns\n */\nconst isInputNotEmpty = (input) => {\n  return input.value != \"\" ? true : false;\n};\n\n/**\n * Used to validate if an inputed email is valid\n *  -> TRUE = VALID\n *  -> FALSE = NOT VALID\n * @param {String} email\n * @returns\n */\nconst isEmailValid = (email) => {\n  return email.toLowerCase().match(REGULAR_EXPRESIONS.email) ? true : false;\n};\n\n/**\n * Used to display tghe feedback message after inpur validation.\n * @param {HTMLElement} formBlock\n * @param {Object} feedback\n * @param {Boolean} isValid\n */\nconst displayValidationFeedback = (input, feedback, isValid) => {\n  const feedbackBlock = input.nextElementSibling;\n  if (isValid) {\n    feedbackBlock.textContent = feedback.success;\n    feedbackBlock.classList.remove(\"error\");\n    feedbackBlock.classList.add(\"success\");\n  } else {\n    feedbackBlock.textContent = feedback.error;\n    feedbackBlock.classList.remove(\"success\");\n    feedbackBlock.classList.add(\"error\");\n  }\n};\n\n/**\n * Used to reveal an element\n * @param {HTMLElement} element\n */\nconst reveal = (element) => {\n  element.classList.remove(\"hide\");\n};\n\n/**\n * Used to hide an element\n * @param {HTMLElement} element\n */\nconst hide = (element) => {\n  element.classList.add(\"hide\");\n};\n\n/**\n * Used to clone an element\n * @param {HTMLElement} element\n * @returns\n */\nconst clone = (element) => {\n  reveal(element);\n  const clone = element.cloneNode(true);\n  clone.setAttribute(\"data-template\", \"false\");\n  element.parentElement.insertBefore(clone, element);\n  hide(element);\n  return clone;\n};\n\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/helpers/element.js?");

/***/ }),

/***/ "./src/js/shop-page.js":
/*!*****************************!*\
  !*** ./src/js/shop-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/element.js */ \"./src/js/helpers/element.js\");\n/* harmony import */ var _helpers_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/data.js */ \"./src/js/helpers/data.js\");\n/**\n * shop-page.js\n * ----------------\n * DESCRIPTION:\n * This file contains specific functionality for the page /shop.html\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 24/04/2023\n * LAST UPDATE: 24/04/2023\n */\n// IMPORTS ////////////////\n\n\n\n// DOM Elements ////////////////\nconst templateCard = document.querySelector('[data-template=\"true\"]');\n\n// FUNCTIONS ////////////////\nconst setProductCards = (product) => {\n  const cloneCard = (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.clone)(templateCard);\n  const productLink = cloneCard.querySelector('[data-element=\"product-link\"]');\n  const image = productLink.querySelector(\"img\");\n  productLink.href = `https://taburete.minimaldesigns.ie/product?name=${product.name\n    .toLowerCase()\n    .replace(\" \", \"\")}`;\n  image.src = product.images.image_1;\n  image.alt = product.shortDescription;\n  cloneCard.querySelector('[data-element=\"product-name\"').textContent =\n    product.name;\n  cloneCard.querySelector(\n    '[data-element=\"product-price\"'\n  ).textContent = `€ ${product.price}`;\n  cloneCard.querySelector('[data-element=\"product-category\"').textContent =\n    product.category;\n};\n\n// LOGIC ////////////////\n(0,_helpers_data_js__WEBPACK_IMPORTED_MODULE_1__.fetchJson)(\"https://taburete.minimaldesigns.ie/data/products.json\").then(\n  (response) => {\n    const products = response.data.products;\n    products.forEach((product) => {\n      setProductCards(product);\n    });\n  }\n);\n\n\n//# sourceURL=webpack://taburete-website/./src/js/shop-page.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/shop-page.js");
/******/ 	
/******/ })()
;