import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

export const sliderInit = () => {
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
  // const studentsSwiper = new Swiper(".studentsSwiper", {
  //   loop: false,
  //   modules: [ Autoplay ],
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   slidesPerView: "auto",
  //   spaceBetween: 10,
  //   // slidesOffsetBefore: 16,
  //   // slidesOffsetAfter: 16,
  //   // speed: 500,
  //   // breakpoints: {
  //   //   480: {
  //   //     // slidesPerView: "auto",
  //   //     spaceBetween: 20,
  //   //     slidesOffsetBefore: 16,
  //   //     slidesOffsetAfter: 12,
  //   //   },
  //   //   576: {
  //   //     // slidesPerView: "auto",
  //   //     spaceBetween: 22,
  //   //     slidesOffsetBefore: 30,
  //   //     slidesOffsetAfter: 30,
  //   //   },
  //   //   768: {
  //   //     // slidesPerView: 2,
  //   //     spaceBetween: 31,
  //   //     slidesOffsetBefore: 0,
  //   //     slidesOffsetAfter: 0,
  //   //   },
  //   //   992: {
  //   //     // slidesPerView: 3,
  //   //     spaceBetween: 40,
  //   //     slidesOffsetBefore: 0,
  //   //   },
  //   //   1200: {
  //   //     // slidesPerView: 3,
  //   //     spaceBetween: 6,
  //   //     slidesOffsetBefore: 0,
  //   //   },
  //   //   1360: {
  //   //     // slidesPerView: 3,
  //   //     spaceBetween: 13,
  //   //     slidesOffsetBefore: 0,
  //   //   },
  //   //   1400: {
  //   //     // slidesPerView: 3,
  //   //     spaceBetween: 103,
  //   //     slidesOffsetBefore: 0,
  //   //   },
  //   // },

  //   // keyboard: {
  //   //   enabled: true,
  //   // },
  // });

  // Splide-slider Students

  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
  });

  splide.mount();


};
