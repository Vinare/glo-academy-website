import { hovers } from "../constants/masterclasses";
import { resizeCards } from "../helpers/resizeCards";

export const masterClasses = () => {
  const wrapper = document.getElementById("masterclasses__wrapper");
  const cards = wrapper.querySelectorAll(".swiper-slide.masterclasses__card");

  const randomHover = () => {
    const min = Math.ceil(0);
    const max = Math.floor(3);
    return hovers[Math.floor(Math.random() * (max - min + 1)) + min];
  };

  const renderCards = () => {
    const cards = document.querySelectorAll('.swiper-slide.masterclasses__card');
    const showBtn = document.getElementById('show-more-button')

    cards.forEach((card, idx) => {
      if (idx > 3) {
        card.classList.add('-disabled')
      } else {
        card.classList.remove('-disabled')
      }
  
      card.classList.add(randomHover())
    })

    if (cards.length > 4) {
      showBtn.classList.remove('-disabled')
    } else {
      showBtn.classList.add('-disabled')
    }

    showBtn.addEventListener("click", () => {
      cards.forEach((card) => {
        card.classList.remove("-disabled");

        resizeCards()
      });

      showBtn.classList.add("-disabled");
    });
  };

  if (cards.length > 5) {
    wrapper.insertAdjacentHTML("beforeend", `
      <div class="masterclasses__card masterclasses__card_short masterclasses__card_button" id="show-more-button">
          <span class="masterclasses__card_badge">смотреть все мастер классы</span>
          <strong class="masterclasses__card_number">${cards.length}</strong>
      </div>
    `);

    renderCards()
    resizeCards()
  }
};