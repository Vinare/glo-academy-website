import { resizeCards } from "../helpers/resizeCards";

export const masterClassesFilter = () => {
    const filterCards = () => {
        const buttons = document.querySelectorAll('.masterclasses__btn-group-input');
        const btnShowMore = document.querySelector('.masterclasses__card_button')

        buttons.forEach((btn, idx) => {
            btn.addEventListener('change', () => {
                const cards = document.querySelectorAll(".masterclasses__card.swiper-slide");

                if (btn.value === 'all') {
                    cards.forEach((card, index) => {
                        if (index > 3) {
                            card.classList.add('-disabled')
                        } else {
                            card.classList.remove('-disabled')
                        }

                        if (cards.length > 4) {
                            btnShowMore.classList.remove('-disabled')
                        } else {
                            btnShowMore.classList.add('-disabled')
                        }
                    })
                } else {
                    cards.forEach((card) => {
                        if (card.dataset.tag === btn.value) {
                            card.classList.remove('-disabled')
                        } else {
                            card.classList.add('-disabled')
                        }
                    })

                    btnShowMore.classList.add('-disabled')
                }


                resizeCards()
            })
        })
    }

    filterCards()
}