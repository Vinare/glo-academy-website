//Swiper-slider
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    // spaceBetween: 40,
    // centeredSlides: false,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 50,
            centeredSlides: false,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 60,
        }
    }
});
