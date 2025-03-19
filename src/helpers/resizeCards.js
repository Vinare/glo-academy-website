export const resizeCards = () => {
    const cards = document.querySelectorAll(".masterclasses__card.swiper-slide:not(.-disabled)");

    cards.forEach((card, idx) => {
        if (idx < 2) {
            card.classList.remove('masterclasses__card_short')
            card.classList.add('masterclasses__card_long')
        } else {
            card.classList.remove('masterclasses__card_long')
            card.classList.add('masterclasses__card_short')
        }
    })
}