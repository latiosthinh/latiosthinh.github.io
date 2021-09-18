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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = [\n\t{\n\t\t\"img\": \"./images/hob1.png\",\n\t\t\"title\": \"placa de inducción de 36 cm\",\n\t\t\"excerpt\": \"For the ultimate level of flexibility, the zones on this induction hob adapt automatically to your cookware - ensuring even cooking results whatever the pan's size or position\",\n\t\t\"feature\": {\n\t\t\t1: \"MaxiSense Pure Technology\",\n\t\t\t2: \"Direck Touch Controls\"\n\t\t},\n\t\t\"price\": \"5.000.000\",\n\t\t\"url\": \"#\"\n\t},\n\t{\n\t\t\"img\": \"./images/hob2.png\",\n\t\t\"title\": \"60cm pure 4 zone induction cooktop\",\n\t\t\"excerpt\": \"Preparing many dishes at the same time or cooking for a dinner party? This hob is made for those occasions when you need more options, with equally tasty results. It's FlexBridge feature means you can customize your own cooking area, combining up to 4 segments with a consistent and even heat distribution.\",\n\t\t\"feature\": {\n\t\t\t1: \"Residual Heat Indicator\",\n\t\t\t2: \"Automax Function\",\n\t\t\t3: \"Power Slide\"\n\t\t},\n\t\t\"price\": \"6.000.000\",\n\t\t\"url\": \"#\"\n\t},\n\t{\n\t\t\"img\": \"./images/hob3.png\",\n\t\t\"title\": \"80cm freezone induction cooktop\",\n\t\t\"excerpt\": \"get the very best taste and texture when frying, every single time. To start, justselect the food and desired result. No more guessing when the pan or oil is at the right temperature. No more heat adjustments. With the SenseFry induction hob, great flavour is guarenteed\",\n\t\t\"feature\": {\n\t\t\t1: \"MaxiSense Pure Technology\",\n\t\t},\n\t\t\"price\": \"7.000.000\",\n\t\t\"url\": \"#\"\n\t},\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);\n\n//# sourceURL=webpack://niteco/./src/data.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst resultItem = ( obj ) => {\n\tlet feature = ''\n\tObject.values( obj.feature ).map( f => feature += `<li>${f}</li>` )\n\n\treturn `<a href=${obj.url} class=\"result-item\">\n\t\t\t\t<div class=\"entry-thumbnail\">\n\t\t\t\t\t<img src=\"${obj.img}\" alt=\"${obj.title}\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"entry-content\">\n\t\t\t\t\t<h2 class=\"ttu\">${obj.title}</h2>\n\t\t\t\t\t<p>${obj.excerpt}</p>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t${feature}\n\t\t\t\t\t</ul>\n\t\t\t\t\t<p class=\"price\">Price: ${obj.price} VND</p>\n\t\t\t\t</div>\n\t\t\t</a>`\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resultItem);\n\n//# sourceURL=webpack://niteco/./src/item.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n\n\n\nwindow.addEventListener( 'DOMContentLoaded', () => {\n\tconst tick      = 2000\n\tconst input     = document.querySelector( '#search-form input' )\n\tconst select    = document.querySelector( '#search-form select' )\n\tconst resultDiv = document.querySelector( '.result' )\n\n\tlet searchType = 'content'\n\tselect.addEventListener( 'change', function( e ) {\n\t\tsearchType = e.target.value\n\t} )\n\n\tconst getData = () => {\n\t\tlet html = ''\n\t\t_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map( d => {\n\t\t\tconst feature = Object.values( d.feature )\n\t\t\tconst content = [d.title, d.excerpt, ...feature].join( ',' ).toLowerCase()\n\t\t\t\n\t\t\tconst price = parseInt( d.price.replace( /\\./g, '' ) )\n\n\t\t\tif ( 'content' === searchType && content.match( input.value ) ) {\n\t\t\t\thtml += (0,_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( d )\n\t\t\t}\n\n\t\t\tif ( 'price' === searchType && price <= parseInt( input.value ) ) {\n\t\t\t\thtml += (0,_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( d )\n\t\t\t}\n\t\t} )\n\t\t\n\t\tresultDiv.innerHTML = html\n\t}\n\n\tlet timer = null\n\tinput.addEventListener( 'keydown', function() {\n\t\tif ( input.value.length === 0 || input.value.match( /\\s+/ ) ) {\n\t\t\tresultDiv.innerHTML = ''\n\t\t\treturn\n\t\t}\n\n\t\tclearTimeout( timer )\n\t\ttimer = setTimeout( getData, tick )\n\t} )\n\n\tdocument.addEventListener( 'click', function( e ) {\n\t\tif ( ! [ select, input, resultDiv ].includes( e.target ) ) {\n\t\t\tresultDiv.innerHTML = ''\n\t\t}\n\t} )\n} )\n\n//# sourceURL=webpack://niteco/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;