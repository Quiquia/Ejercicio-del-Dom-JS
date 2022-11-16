export default function hamburgerMenu(panelBtn, panel, menu) {
  const $panel = document.getElementById("panel"),
    $panelBtn = document.getElementById("panelBtn"),
    $menuLink = document.getElementById("menu");

  $panelBtn.addEventListener("click", () => {
    document.getElementById("panel").classList.toggle("is-active");
    document.getElementById("panelBtn").classList.toggle("is-active");
  });

  $menuLink.addEventListener("click", () => {
    document.getElementById("panel").classList.remove("is-active");
    document.getElementById("panelBtn").classList.remove("is-active");
  });
}
