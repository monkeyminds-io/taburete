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

/***/ "./src/js/helpers/page.js":
/*!********************************!*\
  !*** ./src/js/helpers/page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPageFromUrl\": () => (/* binding */ getPageFromUrl),\n/* harmony export */   \"getSearchParams\": () => (/* binding */ getSearchParams)\n/* harmony export */ });\n/**\n * page.js\n * ----------------\n * DESCRIPTION:\n * This file contains a collection of handy functions related to page manipilation.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 22/04/2023\n * LAST UPDATE: 22/04/2023\n */\n/**\n * Used to get the page name from the url\n * @returns\n */\nconst getPageFromUrl = () => {\n  const url = window.location.href;\n  const page = url.split(\"/\")[url.split(\"/\").length - 1].split(\".\")[0];\n  return page;\n};\n\n/**\n * Used to get the URL params\n * @returns\n */\nconst getSearchParams = () => {\n  const queryString = window.location.search;\n  const urlParams = new URLSearchParams(queryString);\n  return urlParams;\n};\n\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/helpers/page.js?");

/***/ }),

/***/ "./src/js/shop-page.js":
/*!*****************************!*\
  !*** ./src/js/shop-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/element.js */ \"./src/js/helpers/element.js\");\n/* harmony import */ var _helpers_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/data.js */ \"./src/js/helpers/data.js\");\n/* harmony import */ var _helpers_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/page.js */ \"./src/js/helpers/page.js\");\n/**\n * shop-page.js\n * ----------------\n * DESCRIPTION:\n * This file contains specific functionality for the page /shop.html\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 24/04/2023\n * LAST UPDATE: 24/04/2023\n */\n// IMPORTS ////////////////\n\n\n\n\n// DOM Elements ////////////////\nconst templateCard = document.querySelector('[data-template=\"true\"]');\n\n// FUNCTIONS ////////////////\n/**\n * Used to set the product cards with the data from API\n * @param {Object} product\n */\nconst setProductCard = (product) => {\n  const cloneCard = (0,_helpers_element_js__WEBPACK_IMPORTED_MODULE_0__.clone)(templateCard);\n  const productLink = cloneCard.querySelector('[data-element=\"product-link\"]');\n  const image = productLink.querySelector(\"img\");\n  productLink.href = `./shop/product.html?name=${product.name\n    .toLowerCase()\n    .replace(\" \", \"\")}`;\n  image.src = product.images.image_1;\n  image.alt = product.shortDescription;\n  cloneCard.querySelector('[data-element=\"product-name\"').textContent =\n    product.name;\n  cloneCard.querySelector(\n    '[data-element=\"product-price\"'\n  ).textContent = `€ ${product.price}`;\n  cloneCard.querySelector('[data-element=\"product-category\"').textContent =\n    product.category.replace(\"-\", \" \");\n};\n\n/**\n * Used to sort the products by popularity\n * @param {Array} products\n * @returns {Array}\n */\nconst sortByPopularity = (products) => {\n  const productsByRate = products.sort((a, b) => a.rate - b.rate).reverse();\n  return productsByRate;\n};\n\n/**\n * Used to sort the products by name A-Z\n * @param {Array} products\n * @returns {Array}\n */\nconst sortByNameAZ = (products) => {\n  const productsByNameAZ = products.sort((a, b) => {\n    const nameA = a.name.toUpperCase();\n    const nameB = b.name.toUpperCase();\n    if (nameA < nameB) {\n      return -1;\n    }\n    if (nameA > nameB) {\n      return 1;\n    }\n    return 0;\n  });\n  return productsByNameAZ;\n};\n\n/**\n * Used to sort the products by name Z-A\n * @param {Array} products\n * @returns {Array}\n */\nconst sortByNameZA = (products) => {\n  const productsByNameAZ = products.sort((a, b) => {\n    const nameA = a.name.toUpperCase();\n    const nameB = b.name.toUpperCase();\n    if (nameA < nameB) {\n      return 1;\n    }\n    if (nameA > nameB) {\n      return -1;\n    }\n    return 0;\n  });\n  return productsByNameAZ;\n};\n\n/**\n * Used to sort the products by price lower first\n * @param {Array} products\n * @returns {Array}\n */\nconst sortByLowerPrice = (products) => {\n  const productsByLowerPrice = products.sort((a, b) => a.price - b.price);\n  return productsByLowerPrice;\n};\n\n/**\n * Used to sort the products by price higher first\n * @param {Array} products\n * @returns {Array}\n */\nconst sortByHigherPrice = (products) => {\n  const productsByHigherPrice = products\n    .sort((a, b) => a.price - b.price)\n    .reverse();\n  return productsByHigherPrice;\n};\n\n// LOGIC ////////////////\n// fetchJson(\"https://taburete.minimaldesigns.ie/data/products.json\").then(\n(0,_helpers_data_js__WEBPACK_IMPORTED_MODULE_1__.fetchJson)(\"/dist/data/products.json\").then((response) => {\n  let products = response.data.products;\n  const params = (0,_helpers_page_js__WEBPACK_IMPORTED_MODULE_2__.getSearchParams)();\n  if (params.has(\"order\")) {\n    switch (params.get(\"order\")) {\n      case \"most-popular\":\n        products = sortByPopularity(products);\n        break;\n      case \"a-z\":\n        products = sortByNameAZ(products);\n        break;\n      case \"z-a\":\n        products = sortByNameZA(products);\n        break;\n      case \"lower-price\":\n        products = sortByLowerPrice(products);\n        break;\n      case \"higher-price\":\n        products = sortByHigherPrice(products);\n        break;\n    }\n  } else {\n    products = sortByPopularity(products);\n  }\n  products.forEach((product) => {\n    if (params.has(\"category\")) {\n      switch (params.get(\"category\")) {\n        case \"all\":\n          setProductCard(product);\n          break;\n        case \"bedroom\":\n          if (product.category === \"bedroom\") setProductCard(product);\n          break;\n        case \"living-room\":\n          if (product.category === \"living-room\") setProductCard(product);\n          break;\n        case \"garden\":\n          if (product.category === \"garden\") setProductCard(product);\n          break;\n        case \"dining\":\n          if (product.category === \"dining\") setProductCard(product);\n          break;\n      }\n    } else {\n      setProductCard(product);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://taburete-website/./src/js/shop-page.js?");

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