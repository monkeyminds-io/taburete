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

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openMenu\": () => (/* binding */ openMenu),\n/* harmony export */   \"setCurrent\": () => (/* binding */ setCurrent)\n/* harmony export */ });\n/* harmony import */ var _helpers_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/page.js */ \"./src/js/helpers/page.js\");\n// Imports\n\n\n/**\n * Used to open the navbar menu\n * @param {HTMLElement} navbar\n */\nconst openMenu = function (navbar) {\n  const burger = navbar.querySelector('[data-element=\"nav-burger\"]');\n  const menu = navbar.querySelector('[data-element=\"nav-menu\"]');\n  const clickables = [burger, ...burger.children];\n  navbar.onclick = (e) => {\n    clickables.forEach((clicable) => {\n      if (e.target === clicable) {\n        burger.classList.toggle(\"open\");\n        menu.classList.toggle(\"open\");\n      }\n    });\n  };\n};\n\n/**\n * Used to set the current page in the navbar menu\n * @param {HTMLElement} navbar\n */\nconst setCurrent = function (navbar) {\n  const pages = [\"shop\", \"contact-us\", \"register-login\", \"blog\"];\n  pages.forEach((page) => {\n    if ((0,_helpers_page_js__WEBPACK_IMPORTED_MODULE_0__.getPage)() === page) {\n      navbar.querySelector(`[data-page=\"${page}\"]`).classList.add(\"current\");\n    }\n  });\n};\n\n// Exports\n\n\n\n//# sourceURL=webpack://taburete-website/./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar.js */ \"./src/js/components/navbar.js\");\n// NAVBAR FUNCTIONALITY\n// Imports\n\n// DOM elements\nconst navbar = document.querySelector('[data-component=\"navbar\"]');\n// Logic\n(0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__.openMenu)(navbar);\n(0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__.setCurrent)(navbar);\nwindow.onscroll = () => {\n  window.scrollY > 0\n    ? navbar.classList.add(\"white\")\n    : navbar.classList.remove(\"white\");\n};\n\n\n//# sourceURL=webpack://taburete-website/./src/js/global.js?");

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