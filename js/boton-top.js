const d = document,
  w = window;

export default function buttonTop(btn) {
  const $buttonTop = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 600) {
      $buttonTop.classList.remove("hidden");
    } else {
      $buttonTop.classList.add("hidden");
    }
    console.log(w.pageYOffset, d.documentElement.scrollTop);
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      console.log("Prueba");
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
