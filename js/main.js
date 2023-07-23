//Swiper-slider

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 20,
  slidesOffsetBefore: 16,
  speed: 500,
  breakpoints: {
    480: {
      slidesPerView: "auto",
      slidesOffsetBefore: 12,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: "auto",
      slidesOffsetBefore: 30,
      spaceBetween: 30,
    },
    768: {
      slidesOffsetBefore: 0,
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
  },

  keyboard: {
    enabled: true,
  },
});

//Swiper-slider Professions

const professionsSwiper = new Swiper(".professionsSwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 10,
  slidesOffsetBefore: 16,
  speed: 500,
  breakpoints: {
    480: {
      slidesPerView: "auto",
      spaceBetween: 20,
      slidesOffsetBefore: 16,
    },
    576: {
      slidesPerView: "auto",
      spaceBetween: 22,
      slidesOffsetBefore: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 31,
      slidesOffsetBefore: 0,
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
  },

  keyboard: {
    enabled: true,
  },
});
