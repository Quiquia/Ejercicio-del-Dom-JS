// import hamburgerMenu from "./menu-hamburger.js";

// const d = document;

// d.addEventListener("DOMContentLoaded", (e) => {
//   hamburgerMenu("#panel-btn", "#panel", "#menu");
// });

import hamburgerMenu from "./menu_hamburger.js";
import { relojDigital, alarma } from "./reloj_digital.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import buttonTop from "./boton_scroll.js";
import darkLight from "./dark_light.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

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
    "febrery 05, 2023 16:10:00",
    "Lo lograste Bequi, el esfuerzo valio la pena"
  );
  buttonTop(".scroll-top-btn");

  // darkLight(".dark-theme-btn", "dark-mode");

  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/embed/qU6bROI4aMM" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/qU6bROI4aMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/NLy6bmpPJfiAfxyM7" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.03228205832!2d-77.1278646498638!3d-12.026267589405522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1675518326726!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webCam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkLight(".dark-theme-btn", "dark-mode");
networkStatus();

speechReader();
