//Swiper-slider

const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 10,
  slidesOffsetBefore: 16,
  breakpoints: {
    480: {
      slidesPerView: "auto",
      slidesOffsetBefore: 16,
      spaceBetween: 20,
    },
    768: {
      slidesOffsetBefore: 0,
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 29.33,
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
  },
});

//Swiper-slider Professions

const professionsSwiper = new Swiper(".professionsSwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 10,
  slidesOffsetBefore: 16,
  breakpoints: {
    480: {
      slidesPerView: "auto",
      spaceBetween: 20,
      slidesOffsetBefore: 16,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 30,
      slidesOffsetBefore: 0,
    },
    992: {
      slidesPerView: "auto",
      spaceBetween: 15,
      slidesOffsetBefore: 0,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 1,
      slidesOffsetBefore: 0,
    },
    1360: {
      slidesPerView: 3,
      spaceBetween: 13,
      slidesOffsetBefore: 0,
    },
  },
});
