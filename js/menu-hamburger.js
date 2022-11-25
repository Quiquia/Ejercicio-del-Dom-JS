// export default function hamburgerMenu(panelBtn, panel, menu) {
//   const $panel = document.getElementById("panel"),
//     $panelBtn = document.getElementById("panelBtn"),
//     $menuLink = document.getElementById("menu");

//   $panelBtn.addEventListener("click", () => {
//     document.getElementById("panel").classList.toggle("is-active");
//     document.getElementById("panelBtn").classList.toggle("is-active");
//   });

//   $menuLink.addEventListener("click", () => {
//     document.getElementById("panel").classList.remove("is-active");
//     document.getElementById("panelBtn").classList.remove("is-active");
//   });
// }

export default function hamburgerMenu(panelBtn, panel, menuLikn) {
  const d = document;

  d.addEventListener("click", (e) => {
    console.log({ e });
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuLikn)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
