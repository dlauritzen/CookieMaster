/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Settings.js":
/*!*************************!*\
  !*** ./src/Settings.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  AddOn: {\n    Name: \"CookieMaster\",\n    GameVersion: \"2.019\",\n    Version: \"2.019.1\"\n  },\n  Automation: {\n    ClickGoldenCookies: {\n      enabled: false,\n      noWrath: false\n    }\n  },\n  Display: {\n    SortBuildingsByPaybackPeriod: false\n  }\n});\n\n//# sourceURL=webpack:///./src/Settings.js?");

/***/ }),

/***/ "./src/Window.js":
/*!***********************!*\
  !*** ./src/Window.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.Game = window.Game;\n\n//# sourceURL=webpack:///./src/Window.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings */ \"./src/Settings.js\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Window */ \"./src/Window.js\");\n/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Window__WEBPACK_IMPORTED_MODULE_1__);\n\n // Announce we've loaded.\n\nif (_Window__WEBPACK_IMPORTED_MODULE_1__[\"Game\"].prefs.popups) {\n  _Window__WEBPACK_IMPORTED_MODULE_1__[\"Game\"].Popup(_Settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AddOn.Name + \" version \" + _Settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AddOn.Version + \" loaded!\");\n} else {\n  _Window__WEBPACK_IMPORTED_MODULE_1__[\"Game\"].Notify(_Settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AddOn.Name + \" version \" + _Settings__WEBPACK_IMPORTED_MODULE_0__[\"default\"].AddOn.Version + \" loaded!\", \"\", \"\", 1, 1);\n} // Grant the shadow achievement for using an add-on.\n\n\n_Window__WEBPACK_IMPORTED_MODULE_1__[\"Game\"].Win(\"Third-party\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });