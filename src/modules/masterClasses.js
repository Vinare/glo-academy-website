import { masterclasses, hovers } from "../constants/masterclasses";

export const masterClasses = () => {
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
    return hovers[Math.floor(Math.random() * (max - min + 1)) + min];
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

  masterclasses.forEach((item, idx) => {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
            <a href="${item.link}" target="_blank" class="swiper-slide masterclasses__card ${getCardSize(idx)} ${randomHover()} ${getDisabledClass(idx, masterclasses.length)}" data-tag="${item.tags.join(' / ')}">
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

  if (masterclasses.length > 5) {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
            <div class="masterclasses__card masterclasses__card_short masterclasses__card_button" id="masterclasses__card_button">
                <span class="masterclasses__card_badge">смотреть все мастер классы</span>
                <strong class="masterclasses__card_number">${masterclasses.length}</strong>
            </div>
        `
    );

    addHandleMore()
  }
};

export const masterClassesFilter = () => {
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
