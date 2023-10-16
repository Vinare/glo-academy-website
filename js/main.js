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

  // Swiper-slider Students
  const studentsSwiper = new Swiper(".studentsSwiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 10,
    slidesOffsetBefore: 16,
    slidesOffsetAfter: 16,
    speed: 500,
    breakpoints: {
      480: {
        // slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 12,
      },
      576: {
        // slidesPerView: "auto",
        spaceBetween: 22,
        slidesOffsetBefore: 30,
        slidesOffsetAfter: 30,
      },
      768: {
        // slidesPerView: 2,
        spaceBetween: 31,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      992: {
        // slidesPerView: 3,
        spaceBetween: 40,
        slidesOffsetBefore: 0,
      },
      1200: {
        // slidesPerView: 3,
        spaceBetween: 6,
        slidesOffsetBefore: 0,
      },
      1360: {
        // slidesPerView: 3,
        spaceBetween: 13,
        slidesOffsetBefore: 0,
      },
      1400: {
        // slidesPerView: 3,
        spaceBetween: 103,
        slidesOffsetBefore: 0,
      },
    },

    keyboard: {
      enabled: true,
    },
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERtRTtBQUNuRTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUUsbUVBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLHNCQUFzQixtRUFBYSxTQUFTLGNBQWMsc0JBQXNCO0FBQ2hMO0FBQ0EsMERBQTBELHVCQUF1QixJQUFJLFdBQVc7QUFDaEcsd0RBQXdELFdBQVc7QUFDbkU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxNQUFNLG1FQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsbUVBQWEsUUFBUTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN6Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUMzT087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0k7QUFDQTtBQUNKO0FBQzJCO0FBQzdFO0FBQ0EsK0RBQVU7QUFDVixtRUFBWTtBQUNaLG1FQUFZO0FBQ1osK0RBQVU7QUFDVixxRUFBYTtBQUNiLDJFQUFtQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9jb25zdGFudHMvbWFzdGVyY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvbWFzdGVyY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc2xpZGVySW5pdC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc21vb3RoU2Nyb2xsLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9zdXBlclRpdGxlLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy92aWV3Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1hc3RlcmNsYXNzZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgdGl0bGU6ICfQn9GA0L7QvNC+0YHQsNC50YIg0Log0YTQuNC70YzQvNGDIMKr0JLQtdC90L7QvCAywrsnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNi9pbnRlbnNpdmUtY2FyZC1wcmV2aWV3LmpwZycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvaW50ZW5zaXZlL3Zlbm9tLycsXHJcbiAgICAgICAgdGFnczogWydIVE1MIC8gQ1NTJ10sXHJcbiAgICAgICAgdGltZTogMTIyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiAn0KHQtdGA0LLQuNGBINC00L7RgdGC0LDQstC60Lgg0LXQtNGLINC90LAgSFRNTCDQuCBDU1MnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8xMC9pbnRlbnNpdmUtY2FyZC1wcmV2aWV3LTIuanBnJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS9pbnRlbnNpdmUvZGVsaXZlcnktc2VydmljZS8nLFxyXG4gICAgICAgIHRhZ3M6IFsnSFRNTCAvIENTUyddLFxyXG4gICAgICAgIHRpbWU6IDEzMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZTogJ9Ch0LLQvtC5IEF2aXRvINC90LAgSFRNTCDQuCBDU1MnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy9pbnRlbnNpdmUtY2FyZC1wcmV2aWV3LmpwZycsXHJcbiAgICAgICAgbGluazogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvaW50ZW5zaXZlL3ZvcmtzaG9wLXN2b3ktYXZpdG8tbmEtamF2YXNjcmlwdC8nLFxyXG4gICAgICAgIHRhZ3M6IFsnSFRNTCAvIENTUyddLFxyXG4gICAgICAgIHRpbWU6IDE1MFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICB0aXRsZTogJ9Ch0LLQvtC5IFlvdXR1YmUg0L3QsCBIVE1MINC4IENTUyDQuCDQsdC10LfRg9C00LXRgNC20L3QvtC8INC20LXQu9Cw0L3QuNC4INC+0YLQvtGA0LLQsNGC0YzRgdGPJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vZ2xvLWFjYWRlbXkucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDQvaW50ZW5zaXZlLWNhcmQtcHJldmlldy5qcGcnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dsby1hY2FkZW15LnJ1L2ludGVuc2l2ZS95b3V0dWJlLycsXHJcbiAgICAgICAgdGFnczogWydIVE1MIC8gQ1NTJ10sXHJcbiAgICAgICAgdGltZTogMTcxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIHRpdGxlOiAn0KHQstC+0Y8g0YTRgNC40LvQsNC90YEt0LHQuNGA0LbQsCDQvdCwIEphdmFTY3JpcHQnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNi9mcmVlbGFuY2UuanBnJyxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9nbG8tYWNhZGVteS5ydS9pbnRlbnNpdmUvc3ZveWEtZnJpbGFucy1iaXJ6aGEtbmEtamF2YXNjcmlwdC8nLFxyXG4gICAgICAgIHRhZ3M6IFsnSlMnXSxcclxuICAgICAgICB0aW1lOiA2MTVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgdGl0bGU6ICfQodC+0LrRgNCw0YnQsNGC0LXQu9GMINGB0YHRi9C70L7QuiDQvdCwIFBIUCcsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2dsby1hY2FkZW15LnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzEwL2ludGVuc2l2ZS1jYXJkLXByZXZpZXctMy5qcGcnLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dsby1hY2FkZW15LnJ1L2ludGVuc2l2ZS9zaG9ydC1saW5rLycsXHJcbiAgICAgICAgdGFnczogWydQSFAnXSxcclxuICAgICAgICB0aW1lOiAyMTJcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGhvdmVycyA9IFtcclxuICAgICctbGF2ZW5kZXInLFxyXG4gICAgJy1ibHVlJyxcclxuICAgICctbGF2ZW5kZXItbGlsYWMnLFxyXG4gICAgJy1kYXJrLWJsdWUnXHJcbl0iLCJpbXBvcnQgeyBtYXN0ZXJjbGFzc2VzLCBob3ZlcnMgfSBmcm9tIFwiLi4vY29uc3RhbnRzL21hc3RlcmNsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXN0ZXJDbGFzc2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hc3RlcmNsYXNzZXNfX3dyYXBwZXJcIik7XHJcblxyXG4gIGNvbnN0IGdldENhcmRTaXplID0gKGlkeCkgPT4ge1xyXG4gICAgcmV0dXJuIGlkeCA8PSAxID8gXCJtYXN0ZXJjbGFzc2VzX19jYXJkX2xvbmdcIiA6IFwibWFzdGVyY2xhc3Nlc19fY2FyZF9zaG9ydFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldERpc2FibGVkQ2xhc3MgPSAoaWR4LCBsZW5ndGgpID0+IHtcclxuICAgIGlmIChsZW5ndGggPiA1ICYmIGlkeCA+IDMpIHtcclxuICAgICAgcmV0dXJuIFwiLWRpc2FibGVkXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFuZG9tSG92ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtaW4gPSBNYXRoLmNlaWwoMCk7XHJcbiAgICBjb25zdCBtYXggPSBNYXRoLmZsb29yKDMpO1xyXG4gICAgcmV0dXJuIGhvdmVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRIYW5kbGVNb3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICBcIi5tYXN0ZXJjbGFzc2VzX19jYXJkLnN3aXBlci1zbGlkZVwiXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2hvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0ZXJjbGFzc2VzX19jYXJkX2J1dHRvbicpXHJcblxyXG4gICAgc2hvd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiLWRpc2FibGVkXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNob3dCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgbWFzdGVyY2xhc3Nlcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcclxuICAgIHdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUgbWFzdGVyY2xhc3Nlc19fY2FyZCAke2dldENhcmRTaXplKGlkeCl9ICR7cmFuZG9tSG92ZXIoKX0gJHtnZXREaXNhYmxlZENsYXNzKGlkeCwgbWFzdGVyY2xhc3Nlcy5sZW5ndGgpfVwiIGRhdGEtdGFnPVwiJHtpdGVtLnRhZ3Muam9pbignIC8gJyl9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFzdGVyY2xhc3Nlc19fY2FyZF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hc3RlcmNsYXNzZXNfX2NhcmRfYmFkZ2VcIj4ke2l0ZW0udGFncy5qb2luKCcgLyAnKX0g4oCiICR7aXRlbS50aW1lfSDQvNC40L08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtYXN0ZXJjbGFzc2VzX19jYXJkX3RpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFzdGVyY2xhc3Nlc19fY2FyZF9pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFzdGVyY2xhc3Nlc19fY2FyZF9pbWctcGljdHVyZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGlmIChtYXN0ZXJjbGFzc2VzLmxlbmd0aCA+IDUpIHtcclxuICAgIHdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXN0ZXJjbGFzc2VzX19jYXJkIG1hc3RlcmNsYXNzZXNfX2NhcmRfc2hvcnQgbWFzdGVyY2xhc3Nlc19fY2FyZF9idXR0b25cIiBpZD1cIm1hc3RlcmNsYXNzZXNfX2NhcmRfYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hc3RlcmNsYXNzZXNfX2NhcmRfYmFkZ2VcIj7RgdC80L7RgtGA0LXRgtGMINCy0YHQtSDQvNCw0YHRgtC10YAg0LrQu9Cw0YHRgdGLPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cIm1hc3RlcmNsYXNzZXNfX2NhcmRfbnVtYmVyXCI+JHttYXN0ZXJjbGFzc2VzLmxlbmd0aH08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICBhZGRIYW5kbGVNb3JlKClcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWFzdGVyQ2xhc3Nlc0ZpbHRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFzdGVyY2xhc3Nlc19fYnRuLWdyb3VwLWlucHV0Jyk7XHJcbiAgICBjb25zdCBidG5TaG93TW9yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXN0ZXJjbGFzc2VzX19jYXJkX2J1dHRvbicpXHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4sIGlkeCkgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXN0ZXJjbGFzc2VzX19jYXJkLnN3aXBlci1zbGlkZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXJkLmRhdGFzZXQudGFnID09PSBidG4udmFsdWUgfHwgYnRuLnZhbHVlID09PSAnYWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnLWRpc2FibGVkJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCctZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnRuU2hvd01vcmUucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4iLCJleHBvcnQgY29uc3Qgc2xpZGVySW5pdCA9ICgpID0+IHtcclxuICAvLyBTd2lwZXItc2xpZGVyXHJcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlclwiLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIHNsaWRlc09mZnNldEJlZm9yZTogMTYsXHJcbiAgICBzbGlkZXNPZmZzZXRBZnRlcjogMTYsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNDgwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAxMixcclxuICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMTIsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgfSxcclxuICAgICAgNTc2OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAzMCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMzAsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAwLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDI5LFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgfSxcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEzNjA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAxNDAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDY0LFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLmNvdXJzZXNfX3N3aXBlcl9fYnV0dG9uLS1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuY291cnNlc19fc3dpcGVyX19idXR0b24tLXByZXZcIixcclxuICAgICAgZGlzYWJsZWRDbGFzczogXCJjb3Vyc2VzX19zd2lwZXJfX2J1dHRvbi0tZGlzYWJsZWRcIixcclxuICAgIH0sXHJcblxyXG4gICAga2V5Ym9hcmQ6IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIFN3aXBlci1zbGlkZXIgUHJvZmVzc2lvbnNcclxuICBjb25zdCBwcm9mZXNzaW9uc1N3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZmVzc2lvbnNTd2lwZXJcIiwge1xyXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICBsb29wOiBmYWxzZSxcclxuICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDE2LFxyXG4gICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDE2LFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDQ4MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAxNixcclxuICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMTIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDU3Njoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjIsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAzMCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMSxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNixcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEzNjA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTMsXHJcbiAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAxNDAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDEwMyxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5wcm9mZXNzaW9uc19fc3dpcGVyX19idXR0b24tLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5wcm9mZXNzaW9uc19fc3dpcGVyX19idXR0b24tLXByZXZcIixcclxuICAgICAgZGlzYWJsZWRDbGFzczogXCJwcm9mZXNzaW9uc19fc3dpcGVyX19idXR0b24tLWRpc2FibGVkXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGtleWJvYXJkOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBTd2lwZXItc2xpZGVyIE1hc3RlcmNsYXNzZXNcclxuXHJcbiAgLy8gYnJlYWtwb2ludCB3aGVyZSBzd2lwZXIgd2lsbCBiZSBkZXN0cm95ZWRcclxuICBjb25zdCBicmVha3BvaW50ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5OTJweClcIik7XHJcbiAgbGV0IG1hc3RlcmNsYXNzZXNTd2lwZXI7XHJcblxyXG4gIGNvbnN0IGJyZWFrcG9pbnRDaGVja2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGJyZWFrcG9pbnQubWF0Y2hlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZiAobWFzdGVyY2xhc3Nlc1N3aXBlciAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIG1hc3RlcmNsYXNzZXNTd2lwZXIuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChicmVha3BvaW50Lm1hdGNoZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJldHVybiBlbmFibGVTd2lwZXIoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlbmFibGVTd2lwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBtYXN0ZXJjbGFzc2VzU3dpcGVyID0gbmV3IFN3aXBlcihcIi5tYXN0ZXJjbGFzc2VzU3dpcGVyXCIsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDE2LFxyXG4gICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMTYsXHJcbiAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDEyLFxyXG4gICAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTc2OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDMwLFxyXG4gICAgICAgICAgc2xpZGVzT2Zmc2V0QWZ0ZXI6IDMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiBcIi5tYXN0ZXJjbGFzc2VzX19zd2lwZXJfX2J1dHRvbi0tbmV4dFwiLFxyXG4gICAgICAgIHByZXZFbDogXCIubWFzdGVyY2xhc3Nlc19fc3dpcGVyX19idXR0b24tLXByZXZcIixcclxuICAgICAgICBkaXNhYmxlZENsYXNzOiBcIm1hc3RlcmNsYXNzZXNfX3N3aXBlcl9fYnV0dG9uLS1kaXNhYmxlZFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAga2V5Ym9hcmQ6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYnJlYWtwb2ludC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGJyZWFrcG9pbnRDaGVja2VyKTtcclxuXHJcbiAgYnJlYWtwb2ludENoZWNrZXIoKTtcclxuXHJcbiAgLy8gU3dpcGVyLXNsaWRlciBTdHVkZW50c1xyXG4gIGNvbnN0IHN0dWRlbnRzU3dpcGVyID0gbmV3IFN3aXBlcihcIi5zdHVkZW50c1N3aXBlclwiLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIHNsaWRlc09mZnNldEJlZm9yZTogMTYsXHJcbiAgICBzbGlkZXNPZmZzZXRBZnRlcjogMTYsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNDgwOiB7XHJcbiAgICAgICAgLy8gc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDE2LFxyXG4gICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAxMixcclxuICAgICAgfSxcclxuICAgICAgNTc2OiB7XHJcbiAgICAgICAgLy8gc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMixcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDMwLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEFmdGVyOiAzMCxcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgLy8gc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDMxLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgLy8gc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgfSxcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIC8vIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA2LFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgfSxcclxuICAgICAgMTM2MDoge1xyXG4gICAgICAgIC8vIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMyxcclxuICAgICAgICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDE0MDA6IHtcclxuICAgICAgICAvLyBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAzLFxyXG4gICAgICAgIHNsaWRlc09mZnNldEJlZm9yZTogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAga2V5Ym9hcmQ6IHtcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzbW9vdGhTY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvb3Rlcl9fc2VjdGlvbnNfX2l0ZW0tYW5jaG9yXCIpO1xyXG5cclxuICBzZWFtbGVzcy5wb2x5ZmlsbCgpO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cmluZygxKTtcclxuXHJcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICAgIHNlYW1sZXNzLmVsZW1lbnRTY3JvbGxJbnRvVmlldyhzZWN0aW9uLCB7XHJcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi0L3QtdGCXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHN1cGVyVGl0bGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICBjb25zdCBmaXJzdFRpbWVvdXQgPSA2MDAwMDA7XHJcbiAgY29uc3Qgc2Vjb25kVGltZW91dCA9IDM2MDAwMDA7XHJcblxyXG4gIGxldCBmaXJzdFRpbWVyO1xyXG4gIGxldCBzZWNvbmRUaW1lcjtcclxuXHJcbiAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcclxuICAgIGZpcnN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBcItCc0L7QttC90L4g0L3QsNGH0LDRgtGMINCx0LXRgdC/0LvQsNGC0L3QviDimqDvuI9cIjtcclxuXHJcbiAgICAgIHNlY29uZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcItCX0LDQuSwg0LTQsNCy0LDQuSDRg9C20LUg0L3QsNGH0L3QtdC8PyDinaTvuI9cIjtcclxuICAgICAgfSwgc2Vjb25kVGltZW91dCAtIGZpcnN0VGltZW91dCk7XHJcbiAgICB9LCBmaXJzdFRpbWVvdXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0b3BUaW1lciA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dChmaXJzdFRpbWVyKTtcclxuICAgIGNsZWFyVGltZW91dChzZWNvbmRUaW1lcik7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gIH07XHJcbiAgLy8g0JIg0YHQu9GD0YfQsNC1INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4IC0g0YDQsNGB0LrQvtC80LzQtdC90YLQuNGC0YxcclxuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoKSA9PiB7XHJcbiAgLy8gICBzdG9wVGltZXIoKVxyXG4gIC8vICAgc3RhcnRUaW1lcigpXHJcbiAgLy8gfSlcclxuXHJcbiAgc3RhcnRUaW1lcigpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgdmlld0NvbW1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV2aWV3c2dyaWQtYnRuXCIpO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZXZpZXdzZ3JpZC1pdGVtXCIpO1xyXG4gIGNvbnN0IGNvbW1lbnRzQXJyYXkgPSBbLi4uY29tbWVudHNdO1xyXG5cclxuICBjb25zdCBzdGFydCA9IDY7XHJcbiAgY29uc3Qgc3RhY2sgPSA0O1xyXG4gIGxldCBjb3VudCA9IDA7XHJcblxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QXJyYXkgPSBjb21tZW50c0FycmF5LnNsaWNlKFxyXG4gICAgICBzdGFydCArIGNvdW50ICogc3RhY2ssXHJcbiAgICAgIHN0YXJ0ICsgKGNvdW50ICogc3RhY2sgKyBzdGFjaylcclxuICAgICk7XHJcblxyXG4gICAgbmV3QXJyYXkuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdzZ3JpZC1pdGVtX2FjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA8PSBzdGFydCArIGNvdW50ICogc3RhY2spIHtcclxuICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzbGlkZXJJbml0IH0gZnJvbSBcIi4vbW9kdWxlcy9zbGlkZXJJbml0XCI7XHJcbmltcG9ydCB7IHNtb290aFNjcm9sbCB9IGZyb20gXCIuL21vZHVsZXMvc21vb3RoU2Nyb2xsXCI7XHJcbmltcG9ydCB7IHZpZXdDb21tZW50cyB9IGZyb20gXCIuL21vZHVsZXMvdmlld0NvbW1lbnRzXCI7XHJcbmltcG9ydCB7IHN1cGVyVGl0bGUgfSBmcm9tIFwiLi9tb2R1bGVzL3N1cGVyVGl0bGVcIjtcclxuaW1wb3J0IHsgbWFzdGVyQ2xhc3NlcywgbWFzdGVyQ2xhc3Nlc0ZpbHRlciB9IGZyb20gXCIuL21vZHVsZXMvbWFzdGVyY2xhc3Nlc1wiO1xyXG5cclxuc2xpZGVySW5pdCgpO1xyXG5zbW9vdGhTY3JvbGwoKTtcclxudmlld0NvbW1lbnRzKCk7XHJcbnN1cGVyVGl0bGUoKTtcclxubWFzdGVyQ2xhc3NlcygpO1xyXG5tYXN0ZXJDbGFzc2VzRmlsdGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=