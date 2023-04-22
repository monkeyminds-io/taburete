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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initCategoryCards\": () => (/* binding */ initCategoryCards)\n/* harmony export */ });\n/**\n * category-card.js\n * ----------------\n * DESCRIPTION:\n * This file contains the hovering event of the category cards.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 20/04/2023\n * LAST UPDATE: 20/04/2023\n */\n// FUNCTIONS ////////////////\nconst setMouseOverEvent = (card) => {\n  const overlay = card.querySelector('[data-element=\"ovelay\"]');\n  const background = card.querySelector('[data-element=\"background\"]');\n  card.onmouseover = (e) => {\n    overlay.classList.add(\"hovering\");\n    background.classList.add(\"hovering\");\n  };\n};\n\nconst setMouseOutEvent = (card) => {\n  const overlay = card.querySelector('[data-element=\"ovelay\"]');\n  const background = card.querySelector('[data-element=\"background\"]');\n  card.onmouseout = (e) => {\n    overlay.classList.remove(\"hovering\");\n    background.classList.remove(\"hovering\");\n  };\n};\n\n// EXPORTS ////////////////\nconst initCategoryCards = () => {\n  // DOM Elements\n  const categoryCards = document.querySelectorAll(\n    '[data-component=\"category-card\"]'\n  );\n\n  // Logic\n  categoryCards.forEach((card) => {\n    setMouseOverEvent(card);\n    setMouseOutEvent(card);\n  });\n};\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/category-card.js?");

/***/ }),

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openMenu\": () => (/* binding */ openMenu),\n/* harmony export */   \"setCurrent\": () => (/* binding */ setCurrent)\n/* harmony export */ });\n/* harmony import */ var _helpers_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/page.js */ \"./src/js/helpers/page.js\");\n// Imports\n\n\n/**\n * Used to open the navbar menu\n * @param {HTMLElement} navbar\n */\nconst openMenu = function (navbar) {\n  const burger = navbar.querySelector('[data-element=\"nav-burger\"]');\n  const menu = navbar.querySelector('[data-element=\"nav-menu\"]');\n  const clickables = [burger, ...burger.children];\n  navbar.onclick = (e) => {\n    clickables.forEach((clicable) => {\n      if (e.target === clicable) {\n        burger.classList.toggle(\"open\");\n        menu.classList.toggle(\"open\");\n      }\n    });\n  };\n};\n\n/**\n * Used to set the current page in the navbar menu\n * @param {HTMLElement} navbar\n */\nconst setCurrent = function (navbar) {\n  const pages = [\"shop\", \"contact-us\", \"register-login\", \"blog\"];\n  pages.forEach((page) => {\n    if ((0,_helpers_page_js__WEBPACK_IMPORTED_MODULE_0__.getPage)() === page) {\n      navbar.querySelector(`[data-page=\"${page}\"]`).classList.add(\"current\");\n    }\n  });\n};\n\n// Exports\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSliders\": () => (/* binding */ initSliders)\n/* harmony export */ });\n/**\n * slider.js\n * ----------------\n * DESCRIPTION:\n * This file contains the functionality for the slider to slide.\n *\n * AUTHOR: Pau Ferrer @ Minimal Designs\n * CREATED AT: 20/04/2023\n * LAST UPDATE: 20/04/2023\n */\nconst initSliders = (slider) => {\n  // VARIABLES ////////////////\n  let currentSlide = 0;\n  let currentIncrement = 0;\n  let lastSlide;\n  let increment;\n\n  // FUNCTIONS ////////////////\n  const slideMask = (mask) => {\n    mask.style.transform = `translateX(${currentIncrement}px)`;\n  };\n\n  const enableButton = (button) => {\n    button.classList.remove(\"disabled\");\n  };\n\n  const disableButton = (button) => {\n    button.classList.add(\"disabled\");\n  };\n\n  const setCurrentDot = (dots) => {\n    dots.forEach((dot, index) => {\n      dot.classList.remove(\"active\");\n      dot.setAttribute(\"data-is-active\", \"false\");\n      if (index === currentSlide) {\n        dot.classList.add(\"active\");\n        dot.setAttribute(\"data-is-active\", \"true\");\n      }\n    });\n  };\n\n  const setPreviousClickEvent = (mask, slides, previous, dots) => {\n    const clickables = [previous, ...previous.children];\n    previous.onclick = (e) => {\n      e.preventDefault();\n      increment = slides[0].offsetWidth + 32;\n      currentIncrement = currentIncrement + increment;\n      clickables.forEach((clickable) => {\n        if (e.target === clickable) {\n          slideMask(mask);\n          currentSlide--;\n          enableButton(previous.nextElementSibling);\n          currentSlide === 0 ? disableButton(previous) : null;\n          setCurrentDot(dots);\n        }\n      });\n    };\n  };\n\n  const setNextClickEvent = (mask, slides, next, dots) => {\n    const clickables = [next, ...next.children];\n    next.onclick = (e) => {\n      e.preventDefault();\n      increment = slides[0].offsetWidth + 32;\n      currentIncrement = currentIncrement - increment;\n      clickables.forEach((clickable) => {\n        if (e.target === clickable) {\n          slideMask(mask);\n          currentSlide++;\n          enableButton(next.previousElementSibling);\n          currentSlide === lastSlide ? disableButton(next) : null;\n          setCurrentDot(dots);\n        }\n      });\n    };\n  };\n\n  // LOGIC ////////////////\n  const mask = slider.querySelector('[data-element=\"slider-mask\"]');\n  const slides = mask.children;\n  const dots = slider.querySelectorAll('[data-element=\"dot\"]');\n  const previous = slider.querySelector('[data-element=\"button-previous\"]');\n  const next = slider.querySelector('[data-element=\"button-next\"]');\n  lastSlide = slides.length - 1;\n  setPreviousClickEvent(mask, slides, previous, dots);\n  setNextClickEvent(mask, slides, next, dots);\n  window.onresize = (e) => {\n    currentSlide = 0;\n    currentIncrement = 0;\n    slideMask(mask);\n    setCurrentDot(dots);\n    disableButton(previous);\n    enableButton(next);\n  };\n};\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar.js */ \"./src/js/components/navbar.js\");\n/* harmony import */ var _components_category_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/category-card.js */ \"./src/js/components/category-card.js\");\n/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider.js */ \"./src/js/components/slider.js\");\n// NAVBAR FUNCTIONALITY\n// Imports\n\n// TODO abstract to navbar.js and create initNavbar()\nconst navbar = document.querySelector('[data-component=\"navbar\"]');\n(0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__.openMenu)(navbar);\n(0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__.setCurrent)(navbar);\nwindow.onscroll = () => {\n  window.scrollY > 0\n    ? navbar.classList.add(\"white\")\n    : navbar.classList.remove(\"white\");\n};\n\n// CATEGORY CARDS - HOVER EVENT ////////////////\n\n(0,_components_category_card_js__WEBPACK_IMPORTED_MODULE_1__.initCategoryCards)();\n\n// SLIDERS FUNCTIONALITY ////////////////\n\nconst sliders = document.querySelectorAll('[data-component=\"slider\"]');\nsliders.forEach((slider) => {\n  (0,_components_slider_js__WEBPACK_IMPORTED_MODULE_2__.initSliders)(slider);\n});\n\n\n//# sourceURL=webpack://taburete-website/./src/js/global.js?");

/***/ }),

/***/ "./src/js/helpers/page.js":
/*!********************************!*\
  !*** ./src/js/helpers/page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPage\": () => (/* binding */ getPage)\n/* harmony export */ });\nconst getPage = function () {\n  const url = window.location.href;\n  const page = url.split(\"/\")[url.split(\"/\").length - 1].split(\".\")[0];\n  return page;\n};\n\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/helpers/page.js?");

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