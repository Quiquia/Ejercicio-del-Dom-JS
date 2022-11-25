// import hamburgerMenu from "./menu-hamburger.js";

// const d = document;

// d.addEventListener("DOMContentLoaded", (e) => {
//   hamburgerMenu("#panel-btn", "#panel", "#menu");
// });

import hamburgerMenu from "./menu-hamburger.js";
import { relojDigital, alarma } from "./reloj-digital.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma(
    "../assets/alarma-good-morning-5-5.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
