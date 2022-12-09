// import hamburgerMenu from "./menu-hamburger.js";

// const d = document;

// d.addEventListener("DOMContentLoaded", (e) => {
//   hamburgerMenu("#panel-btn", "#panel", "#menu");
// });

import hamburgerMenu from "./menu-hamburger.js";
import { relojDigital, alarma } from "./reloj-digital.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta-regresiva.js";
import buttonTop from "./boton-top.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  relojDigital("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarma(
    "https://cdn.pixabay.com/download/audio/2022/08/31/audio_419263fc12.mp3?filename=leonell-cassio-the-blackest-bouquet-118766.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countdown(
    "countdown",
    "december 8, 2022 16:10:00",
    "Lo lograste Bequi, el esfuerzo valio la pena"
  );
  buttonTop(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
