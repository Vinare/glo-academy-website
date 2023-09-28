export const masterClasses = () => {
  const cards = document.querySelectorAll(".masterclasses__card.swiper-slide");
  const showBtn = document.querySelector(".masterclasses__card_button");

  showBtn.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("-disabled");
    });

    showBtn.style.display = "none";
  });
};
