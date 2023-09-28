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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sliderInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderInit */ \"./src/modules/sliderInit.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_viewComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/viewComments */ \"./src/modules/viewComments.js\");\n/* harmony import */ var _modules_superTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/superTitle */ \"./src/modules/superTitle.js\");\n/* harmony import */ var _modules_masterclasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/masterclasses */ \"./src/modules/masterclasses.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_sliderInit__WEBPACK_IMPORTED_MODULE_0__.sliderInit)();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__.smoothScroll)();\r\n(0,_modules_viewComments__WEBPACK_IMPORTED_MODULE_2__.viewComments)();\r\n(0,_modules_superTitle__WEBPACK_IMPORTED_MODULE_3__.superTitle)();\r\n(0,_modules_masterclasses__WEBPACK_IMPORTED_MODULE_4__.masterClasses)();\n\n//# sourceURL=webpack://glo-academy-website/./src/index.js?");

/***/ }),

/***/ "./src/modules/masterclasses.js":
/*!**************************************!*\
  !*** ./src/modules/masterclasses.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   masterClasses: () => (/* binding */ masterClasses)\n/* harmony export */ });\nconst masterClasses = () => {\r\n  const cards = document.querySelectorAll(\".masterclasses__card.swiper-slide\");\r\n  const showBtn = document.querySelector(\".masterclasses__card_button\");\r\n\r\n  showBtn.addEventListener(\"click\", () => {\r\n    cards.forEach((card) => {\r\n      card.classList.remove(\"-disabled\");\r\n    });\r\n\r\n    showBtn.style.display = \"none\";\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://glo-academy-website/./src/modules/masterclasses.js?");

/***/ }),

/***/ "./src/modules/sliderInit.js":
/*!***********************************!*\
  !*** ./src/modules/sliderInit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderInit: () => (/* binding */ sliderInit)\n/* harmony export */ });\nconst sliderInit = () => {\r\n  // Swiper-slider\r\n  const swiper = new Swiper(\".mySwiper\", {\r\n    slidesPerView: \"auto\",\r\n    loop: false,\r\n    spaceBetween: 20,\r\n    slidesOffsetBefore: 16,\r\n    slidesOffsetAfter: 16,\r\n    speed: 500,\r\n    breakpoints: {\r\n      480: {\r\n        slidesPerView: \"auto\",\r\n        slidesOffsetBefore: 12,\r\n        slidesOffsetAfter: 12,\r\n        spaceBetween: 20,\r\n      },\r\n      576: {\r\n        slidesPerView: \"auto\",\r\n        slidesOffsetBefore: 30,\r\n        slidesOffsetAfter: 30,\r\n        spaceBetween: 30,\r\n      },\r\n      768: {\r\n        slidesOffsetBefore: 0,\r\n        slidesOffsetAfter: 0,\r\n        slidesPerView: 3,\r\n        spaceBetween: 30,\r\n      },\r\n      992: {\r\n        slidesPerView: 4,\r\n        spaceBetween: 29,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n      1200: {\r\n        slidesPerView: 5,\r\n        spaceBetween: 14,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n      1360: {\r\n        slidesPerView: 5,\r\n        spaceBetween: 20,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n      1400: {\r\n        slidesPerView: 5,\r\n        spaceBetween: 64,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n    },\r\n\r\n    navigation: {\r\n      nextEl: \".courses__swiper__button--next\",\r\n      prevEl: \".courses__swiper__button--prev\",\r\n      disabledClass: \"courses__swiper__button--disabled\",\r\n    },\r\n\r\n    keyboard: {\r\n      enabled: true,\r\n    },\r\n  });\r\n\r\n  // Swiper-slider Professions\r\n  const professionsSwiper = new Swiper(\".professionsSwiper\", {\r\n    slidesPerView: \"auto\",\r\n    loop: false,\r\n    spaceBetween: 10,\r\n    slidesOffsetBefore: 16,\r\n    slidesOffsetAfter: 16,\r\n    speed: 500,\r\n    breakpoints: {\r\n      480: {\r\n        slidesPerView: \"auto\",\r\n        spaceBetween: 20,\r\n        slidesOffsetBefore: 16,\r\n        slidesOffsetAfter: 12,\r\n      },\r\n      576: {\r\n        slidesPerView: \"auto\",\r\n        spaceBetween: 22,\r\n        slidesOffsetBefore: 30,\r\n        slidesOffsetAfter: 30,\r\n      },\r\n      768: {\r\n        slidesPerView: 2,\r\n        spaceBetween: 31,\r\n        slidesOffsetBefore: 0,\r\n        slidesOffsetAfter: 0,\r\n      },\r\n      992: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 40,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n      1200: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 6,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n      1360: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 13,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n      1400: {\r\n        slidesPerView: 3,\r\n        spaceBetween: 103,\r\n        slidesOffsetBefore: 0,\r\n      },\r\n    },\r\n\r\n    navigation: {\r\n      nextEl: \".professions__swiper__button--next\",\r\n      prevEl: \".professions__swiper__button--prev\",\r\n      disabledClass: \"professions__swiper__button--disabled\",\r\n    },\r\n\r\n    keyboard: {\r\n      enabled: true,\r\n    },\r\n  });\r\n\r\n  // Swiper-slider Masterclasses\r\n\r\n  // breakpoint where swiper will be destroyed\r\n  const breakpoint = window.matchMedia(\"(min-width: 992px)\");\r\n  let masterclassesSwiper;\r\n\r\n  const breakpointChecker = function () {\r\n    if (breakpoint.matches === true) {\r\n      if (masterclassesSwiper !== undefined)\r\n        masterclassesSwiper.destroy(true, true);\r\n      return;\r\n    } else if (breakpoint.matches === false) {\r\n      return enableSwiper();\r\n    }\r\n  };\r\n\r\n  const enableSwiper = function () {\r\n    masterclassesSwiper = new Swiper(\".masterclassesSwiper\", {\r\n      slidesPerView: \"auto\",\r\n      loop: false,\r\n      spaceBetween: 16,\r\n      slidesOffsetBefore: 16,\r\n      slidesOffsetAfter: 16,\r\n      speed: 500,\r\n      breakpoints: {\r\n        480: {\r\n          slidesPerView: \"auto\",\r\n          spaceBetween: 20,\r\n          slidesOffsetBefore: 12,\r\n          slidesOffsetAfter: 12,\r\n        },\r\n        576: {\r\n          slidesPerView: \"auto\",\r\n          spaceBetween: 30,\r\n          slidesOffsetBefore: 30,\r\n          slidesOffsetAfter: 30,\r\n        },\r\n        768: {\r\n          slidesPerView: 2,\r\n          spaceBetween: 30,\r\n          slidesOffsetBefore: 0,\r\n          slidesOffsetAfter: 0,\r\n        },\r\n      },\r\n\r\n      navigation: {\r\n        nextEl: \".masterclasses__swiper__button--next\",\r\n        prevEl: \".masterclasses__swiper__button--prev\",\r\n        disabledClass: \"masterclasses__swiper__button--disabled\",\r\n      },\r\n\r\n      keyboard: {\r\n        enabled: true,\r\n      },\r\n    });\r\n  };\r\n\r\n  breakpoint.addEventListener(\"change\", breakpointChecker);\r\n\r\n  breakpointChecker();\r\n};\r\n\n\n//# sourceURL=webpack://glo-academy-website/./src/modules/sliderInit.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const links = document.querySelectorAll(\".footer__sections__item-anchor\");\r\n\r\n  seamless.polyfill();\r\n\r\n  links.forEach((element) => {\r\n    element.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n\r\n      const id = element.getAttribute(\"href\").substring(1);\r\n\r\n      const section = document.getElementById(id);\r\n\r\n      if (section) {\r\n        seamless.elementScrollIntoView(section, {\r\n          behavior: \"smooth\",\r\n          block: \"center\",\r\n        });\r\n      } else {\r\n        console.log(\"нет\");\r\n      }\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://glo-academy-website/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/superTitle.js":
/*!***********************************!*\
  !*** ./src/modules/superTitle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   superTitle: () => (/* binding */ superTitle)\n/* harmony export */ });\nconst superTitle = () => {\r\n  const title = document.title;\r\n  const firstTimeout = 600000;\r\n  const secondTimeout = 3600000;\r\n\r\n  let firstTimer;\r\n  let secondTimer;\r\n\r\n  const startTimer = () => {\r\n    firstTimer = setTimeout(() => {\r\n      document.title = \"Можно начать бесплатно ⚠️\";\r\n\r\n      secondTimer = setTimeout(() => {\r\n        document.title = \"Зай, давай уже начнем? ❤️\";\r\n      }, secondTimeout - firstTimeout);\r\n    }, firstTimeout);\r\n  };\r\n\r\n  const stopTimer = () => {\r\n    clearTimeout(firstTimer);\r\n    clearTimeout(secondTimer);\r\n    document.title = title;\r\n  };\r\n  // В случае необходимости - раскомментить\r\n  // document.addEventListener('mousemove', () => {\r\n  //   stopTimer()\r\n  //   startTimer()\r\n  // })\r\n\r\n  startTimer();\r\n};\r\n\n\n//# sourceURL=webpack://glo-academy-website/./src/modules/superTitle.js?");

/***/ }),

/***/ "./src/modules/viewComments.js":
/*!*************************************!*\
  !*** ./src/modules/viewComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   viewComments: () => (/* binding */ viewComments)\n/* harmony export */ });\nconst viewComments = () => {\r\n  const btn = document.querySelector(\".reviewsgrid-btn\");\r\n  const comments = document.querySelectorAll(\".reviewsgrid-item\");\r\n  const commentsArray = [...comments];\r\n\r\n  const start = 6;\r\n  const stack = 4;\r\n  let count = 0;\r\n\r\n  btn.addEventListener(\"click\", () => {\r\n    const newArray = commentsArray.slice(\r\n      start + count * stack,\r\n      start + (count * stack + stack)\r\n    );\r\n\r\n    newArray.forEach((comment) => {\r\n      comment.classList.add(\"reviewsgrid-item_active\");\r\n    });\r\n\r\n    count++;\r\n\r\n    if (comments.length <= start + count * stack) {\r\n      btn.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://glo-academy-website/./src/modules/viewComments.js?");

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