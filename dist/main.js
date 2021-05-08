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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _pages_mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mainpage */ \"./src/pages/mainpage.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\nconsole.log('hello')\n;\n\n\n\n\n\n\nfunction html() {\n  const link = document.querySelector(\"link[rel*='icon']\") || document.createElement('link');\n  link.type = 'image/x-icon';\n  link.rel = 'shortcut icon';\n  document.getElementsByTagName('head')[0].appendChild(link);\n}\n\nconst content = document.querySelector('.content');\ncontent.appendChild((0,_pages_mainpage__WEBPACK_IMPORTED_MODULE_1__.default)());\n\nconst mainContent = document.querySelector('.content');\nmainContent.append((0,_pages_home__WEBPACK_IMPORTED_MODULE_2__.default)());\nmainContent.append((0,_pages_about__WEBPACK_IMPORTED_MODULE_3__.default)());\nmainContent.append((0,_pages_menu__WEBPACK_IMPORTED_MODULE_4__.default)());\nmainContent.append((0,_pages_contact__WEBPACK_IMPORTED_MODULE_5__.default)());\nmainContent.append(html());\n\nconst nav = new _navigation__WEBPACK_IMPORTED_MODULE_0__.default();\nconst pages = document.querySelectorAll('.pages');\nfor (let i = 1; i < pages.length; i) {\n  pages[i].classList.add('hide');\n}\n\nconst hidePages = () => {\n  for (let i = 0; i < pages.length; i) {\n    pages[i].classList.add('hide');\n  }\n};\n\nconst ctaBtn = document.querySelector('.cta-btn');\nctaBtn.addEventListener('click', () => {\n  const menu = document.querySelector('.home-page');\n  hidePages();\n  menu.classList.remove('hide');\n});\n\nconst logo = document.querySelector('.logo');\nlogo.addEventListener('click', () => {\n  const home = document.querySelector('.home-page');\n  hidePages();\n  home.classList.remove('hide');\n});\n\nnav.onClick((e) => {\n  if (e.target.id === 'home') {\n    const home = document.querySelector('.home-page');\n    hidePages();\n    home.classList.remove('hide');\n  }\n  if (e.target.id === 'about') {\n    const about = document.querySelector('.about-page');\n    hidePages();\n    about.classList.remove('hide');\n  }\n  if (e.target.id === 'menu') {\n    const menu = document.querySelector('.menu-page');\n    hidePages();\n    menu.classList.remove('hide');\n  }\n  if (e.target.id === 'contact') {\n    const contact = document.querySelector('.contact-page');\n    hidePages();\n    contact.classList.remove('hide');\n  }\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navigation)\n/* harmony export */ });\nclass Navigation {\n  constructor() {\n    this.home = document.getElementById('home');\n    this.about = document.getElementById('about');\n    this.menu = document.getElementById('menu');\n    this.contact = document.getElementById('contact');\n  }\n\n  onClick(cb) {\n    [this.home, this.about, this.menu, this.contact].forEach((nav) => {\n      nav.addEventListener('click', cb);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/navigation.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutPage)\n/* harmony export */ });\nfunction aboutPage() {\n  const aboutDiv = document.createElement('DIV');\n  aboutDiv.className = 'pages about-page';\n\n  const html = `\n    <div class=\"about-content\">\n    <p class=\"about-title\">About Us</p>\n    <p class=\"about-text\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n    </div>\n\n    <img src=\"/src/assets/about-logo.png\" alt=\"about\">\n\n    `;\n  aboutDiv.insertAdjacentHTML('beforeend', html);\n  return aboutDiv;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n  const contactDiv = document.createElement('DIV');\n  contactDiv.className = 'pages contact-page';\n\n  const html = `\n  <div class=\"contact-container\">\n      <div class=\"contact-details\">\n        <p class=\"contact-title>Contact Us</p>\n        <p class=\"contact-text\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n        // <img src= alt=\"phone number\">\n        <br><br>\n        //\n        <h3>Email Address!: Email@gmail.com</h3>  \n      </div>\n  </div>\n  <iframe src=\"https://www.google.com/maps/@7.077286,4.825114,16z\" width=\"675\" height=\"740\" frameborder=\"70\" style=\"border:0;\" allowfullscreen=\"\" aria-hiden=\"false\" tabindex=\"0\"></iframe>\n  `;\n  contactDiv.insertAdjacentHTML('beforeend', html);\n  return contactDiv;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n  const homeDiv = document.createElement('DIV');\n  homeDiv.className = 'pages home-pages';\n\n  const html = `\n    <div class=\"intro\">\n    <h1>WELCOME TO ARIYA KITCHEN</h1>\n    <button type=\"button\" class=\"cta-btn\">Check our menu</button>\n    </div>\n   `;\n  homeDiv.insertAdjacentHTML('beforeend', html);\n  return homeDiv;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/mainpage.js":
/*!*******************************!*\
  !*** ./src/pages/mainpage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initPage)\n/* harmony export */ });\nfunction initPage() {\n  const container = document.getElementById('DIV');\n  container.className = 'container';\n\n  const html = `\n\n    <img src =\"/src/assets/restaurant-logo.png\" alt=\"nigeria dish's\" class=\"logo\">\n    <ul class=\"navbar\">\n      <li class=\"link\" id=\"home\">Home</li>\n      <li class=\"link\" id=\"about\">About</li>\n      <li class=\"link\" id=\"menu\">Menu</li>\n      <li class=\"link\" id=\"contact\">Content</li>\n    </ul>\n\n    <div class=\"main-content\"></div>\n    `;\n  container.insertAdjacentHTML('beforeend', html);\n  return container;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/mainpage.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage() {\n  const menuDiv = document.createElement('DIV');\n  menuDiv.className = 'pages menu-page';\n  const html = ` \n        <div class = \"menu-items\">\n            <div class = \"menu-item\">\n                <img src = \"./src/assets/jollof-rice.png\"></img>\n                <div class = \"item-details\">\n                    <p class=\"item-name\">Jollof rice</p>\n                    <p class=\"item-price\">10$</p>\n                </div>\n            </div>\n            <div class = \"menu-item\">\n                <img src = \"./src/assets/naija1-oka.png\"></img>\n                <div class = \"item-details\">\n                    <p class=\"item-name\">Oka soup</p>\n                    <p class=\"item-price\">15$</p>\n                </div>\n            </div>\n            <div class = \"menu-item\">\n                <img src = \"./src/assets/naija2.offals-pepper-soup.png\"></img>\n                <div class = \"item-details\">\n                    <p class=\"item-name\">Pepper soup</p>\n                    <p class=\"item-price\">10$</p>\n                </div>\n            </div>\n            <div class = \"menu-item\">\n                <img src = \"./src/assets/naija3-egusi.png\"></img>\n                <div class = \"item-details\">\n                    <p class=\"item-name\">Egusi</p>\n                    <p class=\"item-price\">10$</p>\n                </div>\n            </div>\n        </div>\n        <p class=\"add-ons\">With Soft Drink add 5$</p>\n    `;\n  menuDiv.insertAdjacentHTML('beforeend', html);\n\n  return menuDiv;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;