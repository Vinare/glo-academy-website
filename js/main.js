//Swiper-slider
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 40,

    breakpoints: {
        576: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 60,
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
