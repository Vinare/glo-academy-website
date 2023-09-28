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
  const breakpoint = window.matchMedia('(min-width: 992px)');
  let masterclassesSwiper;

  const breakpointChecker = function () {
    
    if (breakpoint.matches === true) {
      if (masterclassesSwiper !== undefined) masterclassesSwiper.destroy(true, true);
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
        }
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

  breakpoint.addEventListener('change', breakpointChecker);

  breakpointChecker();
}

// seamless-scroll-polyfill

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
}

const viewComments = () => {
  const btn = document.querySelector('.reviewsgrid-btn')
  const comments = document.querySelectorAll('.reviewsgrid-item')
  const commentsArray = [...comments]

  console.log(comments);

  const start = 6
  const stack = 4
  let count = 0

  btn.addEventListener('click', () => {
    const newArray = commentsArray.slice(start + (count * stack), start + ((count * stack) + stack))

    newArray.forEach(comment => {
      comment.classList.add('reviewsgrid-item_active')
    })

    count++

    if (comments.length <= start + (count * stack)) {
      btn.style.display = 'none'
    }
  })
}

const superTitle = () => {
  const title = document.title
  const firstTimeout = 600000
  const secondTimeout = 3600000

  let firstTimer
  let secondTimer

  const startTimer = () => {
    firstTimer = setTimeout(() => {
      document.title = 'Можно начать бесплатно ⚠️'

      secondTimer = setTimeout(() => {
        document.title = 'Зай, давай уже начнем? ❤️'
      }, secondTimeout - firstTimeout)
    }, firstTimeout)
  }

  const stopTimer = () => {
    clearTimeout(firstTimer)
    clearTimeout(secondTimer)
    document.title = title
  }
  // В случае необходимости - раскомментить
  // document.addEventListener('mousemove', () => {
  //   stopTimer()
  //   startTimer()
  // })

  startTimer()
}

const masterclassesFunc = () => {
  const cards = document.querySelectorAll('.masterclasses__card.swiper-slide')
  const showBtn = document.querySelector('.masterclasses__card_button')

  showBtn.addEventListener('click', () => {
    cards.forEach(card => {
      card.classList.remove('-disabled')
    })

    showBtn.style.display = 'none'
  })
}

sliderInit()
smoothScroll()
viewComments()
superTitle()
masterclassesFunc()
