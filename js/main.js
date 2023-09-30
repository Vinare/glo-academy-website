/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/masterclasses.js":
/*!****************************************!*\
  !*** ./src/constants/masterclasses.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hovers: () => (/* binding */ hovers),
/* harmony export */   masterclasses: () => (/* binding */ masterclasses)
/* harmony export */ });
const masterclasses = [
    {
        id: 0,
        title: 'Промосайт к фильму «Веном 2»',
        image: 'https://glo-academy.ru/wp-content/uploads/2021/06/intensive-card-preview.jpg',
        link: 'https://glo-academy.ru/intensive/venom/',
        tags: ['HTML / CSS'],
        time: 122
    },
    {
        id: 1,
        title: 'Сервис доставки еды на HTML и CSS',
        image: 'https://glo-academy.ru/wp-content/uploads/2021/10/intensive-card-preview-2.jpg',
        link: 'https://glo-academy.ru/intensive/delivery-service/',
        tags: ['HTML / CSS'],
        time: 130
    },
    {
        id: 2,
        title: 'Свой Avito на HTML и CSS',
        image: 'https://glo-academy.ru/wp-content/uploads/2020/07/intensive-card-preview.jpg',
        link: 'https://glo-academy.ru/intensive/vorkshop-svoy-avito-na-javascript/',
        tags: ['HTML / CSS'],
        time: 150
    },
    {
        id: 4,
        title: 'Свой Youtube на HTML и CSS и безудержном желании оторваться',
        image: 'https://glo-academy.ru/wp-content/uploads/2021/04/intensive-card-preview.jpg',
        link: 'https://glo-academy.ru/intensive/youtube/',
        tags: ['HTML / CSS'],
        time: 171
    },
    {
        id: 4,
        title: 'Своя фриланс-биржа на JavaScript',
        image: 'https://glo-academy.ru/wp-content/uploads/2020/06/freelance.jpg',
        link: 'https://glo-academy.ru/intensive/svoya-frilans-birzha-na-javascript/',
        tags: ['JS'],
        time: 615
    },
    {
        id: 5,
        title: 'Сокращатель ссылок на PHP',
        image: 'https://glo-academy.ru/wp-content/uploads/2021/10/intensive-card-preview-3.jpg',
        link: 'https://glo-academy.ru/intensive/short-link/',
        tags: ['PHP'],
        time: 212
    }
]

const hovers = [
    '-lavender',
    '-blue',
    '-lavender-lilac',
    '-dark-blue'
]

/***/ }),

/***/ "./src/modules/masterclasses.js":
/*!**************************************!*\
  !*** ./src/modules/masterclasses.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   masterClasses: () => (/* binding */ masterClasses),
/* harmony export */   masterClassesFilter: () => (/* binding */ masterClassesFilter)
/* harmony export */ });
/* harmony import */ var _constants_masterclasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/masterclasses */ "./src/constants/masterclasses.js");


const masterClasses = () => {
  const wrapper = document.getElementById("masterclasses__wrapper");

  const getCardSize = (idx) => {
    return idx <= 1 ? "masterclasses__card_long" : "masterclasses__card_short";
  };

  const getDisabledClass = (idx, length) => {
    if (length > 5 && idx > 3) {
      return "-disabled";
    }
  };

  const randomHover = () => {
    const min = Math.ceil(0);
    const max = Math.floor(3);
    return _constants_masterclasses__WEBPACK_IMPORTED_MODULE_0__.hovers[Math.floor(Math.random() * (max - min + 1)) + min];
  };

  const addHandleMore = () => {
    const cards = document.querySelectorAll(
      ".masterclasses__card.swiper-slide"
    );
    const showBtn = document.getElementById('masterclasses__card_button')

    showBtn.addEventListener("click", () => {
      cards.forEach((card) => {
        card.classList.remove("-disabled");
      });

      showBtn.style.display = "none";
    });
  };

  _constants_masterclasses__WEBPACK_IMPORTED_MODULE_0__.masterclasses.forEach((item, idx) => {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
            <div class="swiper-slide masterclasses__card ${getCardSize(idx)} ${randomHover()} ${getDisabledClass(idx, _constants_masterclasses__WEBPACK_IMPORTED_MODULE_0__.masterclasses.length)}" data-tag="${item.tags.join(' / ')}">
                <div class="masterclasses__card_content">
                <span class="masterclasses__card_badge">${item.tags.join(' / ')} • ${item.time} мин</span>
                <h3 class="masterclasses__card_title">${item.title}</h3>
                <div class="masterclasses__card_img">
                    <div class="masterclasses__card_img-picture" style="background-image: url(${
                      item.image
                    })"></div>
                </div>
                </div>
            </div>
        `
    );
  });

  if (_constants_masterclasses__WEBPACK_IMPORTED_MODULE_0__.masterclasses.length > 5) {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
            <div class="masterclasses__card masterclasses__card_short masterclasses__card_button" id="masterclasses__card_button">
                <span class="masterclasses__card_badge">смотреть все мастер классы</span>
                <strong class="masterclasses__card_number">${_constants_masterclasses__WEBPACK_IMPORTED_MODULE_0__.masterclasses.length}</strong>
            </div>
        `
    );

    addHandleMore()
  }
};

const masterClassesFilter = () => {
    const buttons = document.querySelectorAll('.masterclasses__btn-group-input');
    const btnShowMore = document.getElementById('masterclasses__card_button')

    buttons.forEach((btn, idx) => {
        btn.addEventListener('change', () => {
            const cards = document.querySelectorAll(".masterclasses__card.swiper-slide");

            cards.forEach((card) => {
                if (card.dataset.tag === btn.value || btn.value === 'all') {
                    card.classList.remove('-disabled')
                } else {
                    card.classList.add('-disabled')
                }
            })
            
            btnShowMore.remove()
        })
    })
}


/***/ }),

/***/ "./src/modules/sliderInit.js":
/*!***********************************!*\
  !*** ./src/modules/sliderInit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sliderInit: () => (/* binding */ sliderInit)
/* harmony export */ });
const sliderInit = () => {
  // Swiper-slider
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 20,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    speed: 500,
    breakpoints: {
      480: {
        slidesPerView: "auto",
        slidesOffsetBefore: 12,
        slidesOffsetAfter: 12,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: "auto",
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
        spaceBetween: 30,
      },
      768: {
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 29,
        slidesOffsetBefore: 0,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 14,
        slidesOffsetBefore: 0,
      },
      1360: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 64,
        slidesOffsetBefore: 0,
      },
    },

    navigation: {
      nextEl: ".courses__swiper__button--next",
      prevEl: ".courses__swiper__button--prev",
      disabledClass: "courses__swiper__button--disabled",
    },

    keyboard: {
      enabled: true,
    },
  });

  // Swiper-slider Professions
  const professionsSwiper = new Swiper(".professionsSwiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 10,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    speed: 500,
    breakpoints: {
      480: {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 12,
      },
      576: {
        slidesPerView: "auto",
        spaceBetween: 22,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 31,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
        slidesOffsetBefore: 0,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 6,
        slidesOffsetBefore: 0,
      },
      1360: {
        slidesPerView: 3,
        spaceBetween: 13,
        slidesOffsetBefore: 0,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 103,
        slidesOffsetBefore: 0,
      },
    },

    navigation: {
      nextEl: ".professions__swiper__button--next",
      prevEl: ".professions__swiper__button--prev",
      disabledClass: "professions__swiper__button--disabled",
    },

    keyboard: {
      enabled: true,
    },
  });

  // Swiper-slider Masterclasses

  // breakpoint where swiper will be destroyed
  const breakpoint = window.matchMedia("(min-width: 992px)");
  let masterclassesSwiper;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (masterclassesSwiper !== undefined)
        masterclassesSwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    masterclassesSwiper = new Swiper(".masterclassesSwiper", {
      slidesPerView: "auto",
      loop: false,
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      speed: 500,
      breakpoints: {
        480: {
          slidesPerView: "auto",
          spaceBetween: 20,
          slidesOffsetBefore: 12,
          slidesOffsetAfter: 12,
        },
        576: {
          slidesPerView: "auto",
          spaceBetween: 30,
          slidesOffsetBefore: 30,
          slidesOffsetAfter: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },

      navigation: {
        nextEl: ".masterclasses__swiper__button--next",
        prevEl: ".masterclasses__swiper__button--prev",
        disabledClass: "masterclasses__swiper__button--disabled",
      },

      keyboard: {
        enabled: true,
      },
    });
  };

  breakpoint.addEventListener("change", breakpointChecker);

  breakpointChecker();
};


/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)
/* harmony export */ });
const smoothScroll = () => {
  const links = document.querySelectorAll(".footer__sections__item-anchor");

  seamless.polyfill();

  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      const id = element.getAttribute("href").substring(1);

      const section = document.getElementById(id);

      if (section) {
        seamless.elementScrollIntoView(section, {
          behavior: "smooth",
          block: "center",
        });
      } else {
        console.log("нет");
      }
    });
  });
};


/***/ }),

/***/ "./src/modules/superTitle.js":
/*!***********************************!*\
  !*** ./src/modules/superTitle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   superTitle: () => (/* binding */ superTitle)
/* harmony export */ });
const superTitle = () => {
  const title = document.title;
  const firstTimeout = 600000;
  const secondTimeout = 3600000;

  let firstTimer;
  let secondTimer;

  const startTimer = () => {
    firstTimer = setTimeout(() => {
      document.title = "Можно начать бесплатно ⚠️";

      secondTimer = setTimeout(() => {
        document.title = "Зай, давай уже начнем? ❤️";
      }, secondTimeout - firstTimeout);
    }, firstTimeout);
  };

  const stopTimer = () => {
    clearTimeout(firstTimer);
    clearTimeout(secondTimer);
    document.title = title;
  };
  // В случае необходимости - раскомментить
  // document.addEventListener('mousemove', () => {
  //   stopTimer()
  //   startTimer()
  // })

  startTimer();
};


/***/ }),

/***/ "./src/modules/viewComments.js":
/*!*************************************!*\
  !*** ./src/modules/viewComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   viewComments: () => (/* binding */ viewComments)
/* harmony export */ });
const viewComments = () => {
  const btn = document.querySelector(".reviewsgrid-btn");
  const comments = document.querySelectorAll(".reviewsgrid-item");
  const commentsArray = [...comments];

  const start = 6;
  const stack = 4;
  let count = 0;

  btn.addEventListener("click", () => {
    const newArray = commentsArray.slice(
      start + count * stack,
      start + (count * stack + stack)
    );

    newArray.forEach((comment) => {
      comment.classList.add("reviewsgrid-item_active");
    });

    count++;

    if (comments.length <= start + count * stack) {
      btn.style.display = "none";
    }
  });
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliderInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderInit */ "./src/modules/sliderInit.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScroll */ "./src/modules/smoothScroll.js");
/* harmony import */ var _modules_viewComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/viewComments */ "./src/modules/viewComments.js");
/* harmony import */ var _modules_superTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/superTitle */ "./src/modules/superTitle.js");
/* harmony import */ var _modules_masterclasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/masterclasses */ "./src/modules/masterclasses.js");






(0,_modules_sliderInit__WEBPACK_IMPORTED_MODULE_0__.sliderInit)();
(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_1__.smoothScroll)();
(0,_modules_viewComments__WEBPACK_IMPORTED_MODULE_2__.viewComments)();
(0,_modules_superTitle__WEBPACK_IMPORTED_MODULE_3__.superTitle)();
(0,_modules_masterclasses__WEBPACK_IMPORTED_MODULE_4__.masterClasses)();
(0,_modules_masterclasses__WEBPACK_IMPORTED_MODULE_4__.masterClassesFilter)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERtRTtBQUNuRTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUUsbUVBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLHNCQUFzQixtRUFBYSxTQUFTLGNBQWMsc0JBQXNCO0FBQ2hMO0FBQ0EsMERBQTBELHVCQUF1QixJQUFJLFdBQVc7QUFDaEcsd0RBQXdELFdBQVc7QUFDbkU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxNQUFNLG1FQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsbUVBQWEsUUFBUTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN6Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckxPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNJO0FBQ0E7QUFDSjtBQUMyQjtBQUM3RTtBQUNBLCtEQUFVO0FBQ1YsbUVBQVk7QUFDWixtRUFBWTtBQUNaLCtEQUFVO0FBQ1YscUVBQWE7QUFDYiwyRUFBbUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvY29uc3RhbnRzL21hc3RlcmNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL21hc3RlcmNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3NsaWRlckluaXQuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3Ntb290aFNjcm9sbC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc3VwZXJUaXRsZS5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvdmlld0NvbW1lbnRzLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtYXN0ZXJjbGFzc2VzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIHRpdGxlOiAn0J/RgNC+0LzQvtGB0LDQudGCINC6INGE0LjQu9GM0LzRgyDCq9CS0LXQvdC+0LwgMsK7JyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvaW50ZW5zaXZlLWNhcmQtcHJldmlldy5qcGcnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dsby1hY2FkZW15LnJ1L2ludGVuc2l2ZS92ZW5vbS8nLFxyXG4gICAgICAgIHRhZ3M6IFsnSFRNTCAvIENTUyddLFxyXG4gICAgICAgIHRpbWU6IDEyMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogJ9Ch0LXRgNCy0LjRgSDQtNC+0YHRgtCw0LLQutC4INC10LTRiyDQvdCwIEhUTUwg0LggQ1NTJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMTAvaW50ZW5zaXZlLWNhcmQtcHJldmlldy0yLmpwZycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvaW50ZW5zaXZlL2RlbGl2ZXJ5LXNlcnZpY2UvJyxcclxuICAgICAgICB0YWdzOiBbJ0hUTUwgLyBDU1MnXSxcclxuICAgICAgICB0aW1lOiAxMzBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6ICfQodCy0L7QuSBBdml0byDQvdCwIEhUTUwg0LggQ1NTJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDcvaW50ZW5zaXZlLWNhcmQtcHJldmlldy5qcGcnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dsby1hY2FkZW15LnJ1L2ludGVuc2l2ZS92b3Jrc2hvcC1zdm95LWF2aXRvLW5hLWphdmFzY3JpcHQvJyxcclxuICAgICAgICB0YWdzOiBbJ0hUTUwgLyBDU1MnXSxcclxuICAgICAgICB0aW1lOiAxNTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6ICfQodCy0L7QuSBZb3V0dWJlINC90LAgSFRNTCDQuCBDU1Mg0Lgg0LHQtdC30YPQtNC10YDQttC90L7QvCDQttC10LvQsNC90LjQuCDQvtGC0L7RgNCy0LDRgtGM0YHRjycsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2dsby1hY2FkZW15LnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA0L2ludGVuc2l2ZS1jYXJkLXByZXZpZXcuanBnJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS9pbnRlbnNpdmUveW91dHViZS8nLFxyXG4gICAgICAgIHRhZ3M6IFsnSFRNTCAvIENTUyddLFxyXG4gICAgICAgIHRpbWU6IDE3MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICB0aXRsZTogJ9Ch0LLQvtGPINGE0YDQuNC70LDQvdGBLdCx0LjRgNC20LAg0L3QsCBKYXZhU2NyaXB0JyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDYvZnJlZWxhbmNlLmpwZycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvaW50ZW5zaXZlL3N2b3lhLWZyaWxhbnMtYmlyemhhLW5hLWphdmFzY3JpcHQvJyxcclxuICAgICAgICB0YWdzOiBbJ0pTJ10sXHJcbiAgICAgICAgdGltZTogNjE1XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIHRpdGxlOiAn0KHQvtC60YDQsNGJ0LDRgtC10LvRjCDRgdGB0YvQu9C+0Log0L3QsCBQSFAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8xMC9pbnRlbnNpdmUtY2FyZC1wcmV2aWV3LTMuanBnJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS9pbnRlbnNpdmUvc2hvcnQtbGluay8nLFxyXG4gICAgICAgIHRhZ3M6IFsnUEhQJ10sXHJcbiAgICAgICAgdGltZTogMjEyXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBob3ZlcnMgPSBbXHJcbiAgICAnLWxhdmVuZGVyJyxcclxuICAgICctYmx1ZScsXHJcbiAgICAnLWxhdmVuZGVyLWxpbGFjJyxcclxuICAgICctZGFyay1ibHVlJ1xyXG5dIiwiaW1wb3J0IHsgbWFzdGVyY2xhc3NlcywgaG92ZXJzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9tYXN0ZXJjbGFzc2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFzdGVyQ2xhc3NlcyA9ICgpID0+IHtcclxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXN0ZXJjbGFzc2VzX193cmFwcGVyXCIpO1xyXG5cclxuICBjb25zdCBnZXRDYXJkU2l6ZSA9IChpZHgpID0+IHtcclxuICAgIHJldHVybiBpZHggPD0gMSA/IFwibWFzdGVyY2xhc3Nlc19fY2FyZF9sb25nXCIgOiBcIm1hc3RlcmNsYXNzZXNfX2NhcmRfc2hvcnRcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXREaXNhYmxlZENsYXNzID0gKGlkeCwgbGVuZ3RoKSA9PiB7XHJcbiAgICBpZiAobGVuZ3RoID4gNSAmJiBpZHggPiAzKSB7XHJcbiAgICAgIHJldHVybiBcIi1kaXNhYmxlZFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhbmRvbUhvdmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWluID0gTWF0aC5jZWlsKDApO1xyXG4gICAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcigzKTtcclxuICAgIHJldHVybiBob3ZlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbl07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkSGFuZGxlTW9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIubWFzdGVyY2xhc3Nlc19fY2FyZC5zd2lwZXItc2xpZGVcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNob3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzdGVyY2xhc3Nlc19fY2FyZF9idXR0b24nKVxyXG5cclxuICAgIHNob3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIi1kaXNhYmxlZFwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzaG93QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG1hc3RlcmNsYXNzZXMuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICB3cmFwcGVyLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlIG1hc3RlcmNsYXNzZXNfX2NhcmQgJHtnZXRDYXJkU2l6ZShpZHgpfSAke3JhbmRvbUhvdmVyKCl9ICR7Z2V0RGlzYWJsZWRDbGFzcyhpZHgsIG1hc3RlcmNsYXNzZXMubGVuZ3RoKX1cIiBkYXRhLXRhZz1cIiR7aXRlbS50YWdzLmpvaW4oJyAvICcpfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hc3RlcmNsYXNzZXNfX2NhcmRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXN0ZXJjbGFzc2VzX19jYXJkX2JhZGdlXCI+JHtpdGVtLnRhZ3Muam9pbignIC8gJyl9IOKAoiAke2l0ZW0udGltZX0g0LzQuNC9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibWFzdGVyY2xhc3Nlc19fY2FyZF90aXRsZVwiPiR7aXRlbS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hc3RlcmNsYXNzZXNfX2NhcmRfaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hc3RlcmNsYXNzZXNfX2NhcmRfaW1nLXBpY3R1cmVcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobWFzdGVyY2xhc3Nlcy5sZW5ndGggPiA1KSB7XHJcbiAgICB3cmFwcGVyLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFzdGVyY2xhc3Nlc19fY2FyZCBtYXN0ZXJjbGFzc2VzX19jYXJkX3Nob3J0IG1hc3RlcmNsYXNzZXNfX2NhcmRfYnV0dG9uXCIgaWQ9XCJtYXN0ZXJjbGFzc2VzX19jYXJkX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXN0ZXJjbGFzc2VzX19jYXJkX2JhZGdlXCI+0YHQvNC+0YLRgNC10YLRjCDQstGB0LUg0LzQsNGB0YLQtdGAINC60LvQsNGB0YHRizwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJtYXN0ZXJjbGFzc2VzX19jYXJkX251bWJlclwiPiR7bWFzdGVyY2xhc3Nlcy5sZW5ndGh9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgYWRkSGFuZGxlTW9yZSgpXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hc3RlckNsYXNzZXNGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hc3RlcmNsYXNzZXNfX2J0bi1ncm91cC1pbnB1dCcpO1xyXG4gICAgY29uc3QgYnRuU2hvd01vcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzdGVyY2xhc3Nlc19fY2FyZF9idXR0b24nKVxyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuLCBpZHgpID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFzdGVyY2xhc3Nlc19fY2FyZC5zd2lwZXItc2xpZGVcIik7XHJcblxyXG4gICAgICAgICAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FyZC5kYXRhc2V0LnRhZyA9PT0gYnRuLnZhbHVlIHx8IGJ0bi52YWx1ZSA9PT0gJ2FsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJy1kaXNhYmxlZCcpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnLWRpc2FibGVkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJ0blNob3dNb3JlLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNsaWRlckluaXQgPSAoKSA9PiB7XHJcbiAgLy8gU3dpcGVyLXNsaWRlclxyXG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJcIiwge1xyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDE2LFxyXG4gICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDE2LFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDQ4MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMTIsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDEyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDU3Njoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMzAsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDMwLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyOSxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTQsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAxMzYwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgfSxcclxuICAgICAgMTQwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA2NCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5jb3Vyc2VzX19zd2lwZXJfX2J1dHRvbi0tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLmNvdXJzZXNfX3N3aXBlcl9fYnV0dG9uLS1wcmV2XCIsXHJcbiAgICAgIGRpc2FibGVkQ2xhc3M6IFwiY291cnNlc19fc3dpcGVyX19idXR0b24tLWRpc2FibGVkXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGtleWJvYXJkOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBTd2lwZXItc2xpZGVyIFByb2Zlc3Npb25zXHJcbiAgY29uc3QgcHJvZmVzc2lvbnNTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnByb2Zlc3Npb25zU3dpcGVyXCIsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgbG9vcDogZmFsc2UsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAxNixcclxuICAgIHNsaWRlc09mZnNldEFmdGVyOiAxNixcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA0ODA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMTYsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDEyLFxyXG4gICAgICB9LFxyXG4gICAgICA1NzY6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIyLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMzAsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzEsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDYsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAxMzYwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEzLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgfSxcclxuICAgICAgMTQwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMDMsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIucHJvZmVzc2lvbnNfX3N3aXBlcl9fYnV0dG9uLS1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIucHJvZmVzc2lvbnNfX3N3aXBlcl9fYnV0dG9uLS1wcmV2XCIsXHJcbiAgICAgIGRpc2FibGVkQ2xhc3M6IFwicHJvZmVzc2lvbnNfX3N3aXBlcl9fYnV0dG9uLS1kaXNhYmxlZFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBrZXlib2FyZDoge1xyXG4gICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gU3dpcGVyLXNsaWRlciBNYXN0ZXJjbGFzc2VzXHJcblxyXG4gIC8vIGJyZWFrcG9pbnQgd2hlcmUgc3dpcGVyIHdpbGwgYmUgZGVzdHJveWVkXHJcbiAgY29uc3QgYnJlYWtwb2ludCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTkycHgpXCIpO1xyXG4gIGxldCBtYXN0ZXJjbGFzc2VzU3dpcGVyO1xyXG5cclxuICBjb25zdCBicmVha3BvaW50Q2hlY2tlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChicmVha3BvaW50Lm1hdGNoZXMgPT09IHRydWUpIHtcclxuICAgICAgaWYgKG1hc3RlcmNsYXNzZXNTd2lwZXIgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBtYXN0ZXJjbGFzc2VzU3dpcGVyLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludC5tYXRjaGVzID09PSBmYWxzZSkge1xyXG4gICAgICByZXR1cm4gZW5hYmxlU3dpcGVyKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZW5hYmxlU3dpcGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbWFzdGVyY2xhc3Nlc1N3aXBlciA9IG5ldyBTd2lwZXIoXCIubWFzdGVyY2xhc3Nlc1N3aXBlclwiLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAxNixcclxuICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDE2LFxyXG4gICAgICBzcGVlZDogNTAwLFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAxMixcclxuICAgICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAxMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAzMCxcclxuICAgICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogXCIubWFzdGVyY2xhc3Nlc19fc3dpcGVyX19idXR0b24tLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLm1hc3RlcmNsYXNzZXNfX3N3aXBlcl9fYnV0dG9uLS1wcmV2XCIsXHJcbiAgICAgICAgZGlzYWJsZWRDbGFzczogXCJtYXN0ZXJjbGFzc2VzX19zd2lwZXJfX2J1dHRvbi0tZGlzYWJsZWRcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIGtleWJvYXJkOiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGJyZWFrcG9pbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBicmVha3BvaW50Q2hlY2tlcik7XHJcblxyXG4gIGJyZWFrcG9pbnRDaGVja2VyKCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzbW9vdGhTY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb3Rlcl9fc2VjdGlvbnNfX2l0ZW0tYW5jaG9yXCIpO1xyXG5cclxuICBzZWFtbGVzcy5wb2x5ZmlsbCgpO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cmluZygxKTtcclxuXHJcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICAgIHNlYW1sZXNzLmVsZW1lbnRTY3JvbGxJbnRvVmlldyhzZWN0aW9uLCB7XHJcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0L3QtdGCXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHN1cGVyVGl0bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICBjb25zdCBmaXJzdFRpbWVvdXQgPSA2MDAwMDA7XHJcbiAgY29uc3Qgc2Vjb25kVGltZW91dCA9IDM2MDAwMDA7XHJcblxyXG4gIGxldCBmaXJzdFRpbWVyO1xyXG4gIGxldCBzZWNvbmRUaW1lcjtcclxuXHJcbiAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcclxuICAgIGZpcnN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBcItCc0L7QttC90L4g0L3QsNGH0LDRgtGMINCx0LXRgdC/0LvQsNGC0L3QviDimqDvuI9cIjtcclxuXHJcbiAgICAgIHNlY29uZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcItCX0LDQuSwg0LTQsNCy0LDQuSDRg9C20LUg0L3QsNGH0L3QtdC8PyDinaTvuI9cIjtcclxuICAgICAgfSwgc2Vjb25kVGltZW91dCAtIGZpcnN0VGltZW91dCk7XHJcbiAgICB9LCBmaXJzdFRpbWVvdXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BUaW1lciA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dChmaXJzdFRpbWVyKTtcclxuICAgIGNsZWFyVGltZW91dChzZWNvbmRUaW1lcik7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gIH07XHJcbiAgLy8g0JIg0YHQu9GD0YfQsNC1INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4IC0g0YDQsNGB0LrQvtC80LzQtdC90YLQuNGC0YxcclxuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoKSA9PiB7XHJcbiAgLy8gICBzdG9wVGltZXIoKVxyXG4gIC8vICAgc3RhcnRUaW1lcigpXHJcbiAgLy8gfSlcclxuXHJcbiAgc3RhcnRUaW1lcigpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgdmlld0NvbW1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV2aWV3c2dyaWQtYnRuXCIpO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzZ3JpZC1pdGVtXCIpO1xyXG4gIGNvbnN0IGNvbW1lbnRzQXJyYXkgPSBbLi4uY29tbWVudHNdO1xyXG5cclxuICBjb25zdCBzdGFydCA9IDY7XHJcbiAgY29uc3Qgc3RhY2sgPSA0O1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBjb21tZW50c0FycmF5LnNsaWNlKFxyXG4gICAgICBzdGFydCArIGNvdW50ICogc3RhY2ssXHJcbiAgICAgIHN0YXJ0ICsgKGNvdW50ICogc3RhY2sgKyBzdGFjaylcclxuICAgICk7XHJcblxyXG4gICAgbmV3QXJyYXkuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdzZ3JpZC1pdGVtX2FjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA8PSBzdGFydCArIGNvdW50ICogc3RhY2spIHtcclxuICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzbGlkZXJJbml0IH0gZnJvbSBcIi4vbW9kdWxlcy9zbGlkZXJJbml0XCI7XHJcbmltcG9ydCB7IHNtb290aFNjcm9sbCB9IGZyb20gXCIuL21vZHVsZXMvc21vb3RoU2Nyb2xsXCI7XHJcbmltcG9ydCB7IHZpZXdDb21tZW50cyB9IGZyb20gXCIuL21vZHVsZXMvdmlld0NvbW1lbnRzXCI7XHJcbmltcG9ydCB7IHN1cGVyVGl0bGUgfSBmcm9tIFwiLi9tb2R1bGVzL3N1cGVyVGl0bGVcIjtcclxuaW1wb3J0IHsgbWFzdGVyQ2xhc3NlcywgbWFzdGVyQ2xhc3Nlc0ZpbHRlciB9IGZyb20gXCIuL21vZHVsZXMvbWFzdGVyY2xhc3Nlc1wiO1xyXG5cclxuc2xpZGVySW5pdCgpO1xyXG5zbW9vdGhTY3JvbGwoKTtcclxudmlld0NvbW1lbnRzKCk7XHJcbnN1cGVyVGl0bGUoKTtcclxubWFzdGVyQ2xhc3NlcygpO1xyXG5tYXN0ZXJDbGFzc2VzRmlsdGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=