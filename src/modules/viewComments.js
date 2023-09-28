export const viewComments = () => {
  const btn = document.querySelector(".reviewsgrid-btn");
  const comments = document.querySelectorAll(".reviewsgrid-item");
  const commentsArray = [...comments];

  const start = 6;
  const stack = 4;
  let count = 0;

  btn.addEventListener("click", () => {
    const newArray = commentsArray.slice(
      start + count * stack,
      start + (count * stack + stack)
    );

    newArray.forEach((comment) => {
      comment.classList.add("reviewsgrid-item_active");
    });

    count++;

    if (comments.length <= start + count * stack) {
      btn.style.display = "none";
    }
  });
};
