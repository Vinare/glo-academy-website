export const smoothScroll = () => {
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
};
