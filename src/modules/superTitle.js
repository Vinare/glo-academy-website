export const superTitle = () => {
  const title = document.title;
  const firstTimeout = 600000;
  const secondTimeout = 3600000;

  let firstTimer;
  let secondTimer;

  const startTimer = () => {
    firstTimer = setTimeout(() => {
      document.title = "Можно начать бесплатно ⚠️";

      secondTimer = setTimeout(() => {
        document.title = "Зай, давай уже начнем? ❤️";
      }, secondTimeout - firstTimeout);
    }, firstTimeout);
  };

  const stopTimer = () => {
    clearTimeout(firstTimer);
    clearTimeout(secondTimer);
    document.title = title;
  };
  // В случае необходимости - раскомментить
  // document.addEventListener('mousemove', () => {
  //   stopTimer()
  //   startTimer()
  // })

  startTimer();
};
