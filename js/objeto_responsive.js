const d = document,
  w = window;

/**
 *
 * @param {string} id identificador
 * @param {string} mq media query: (min-width:1024px)
 * @param {*} mobileContent
 * @param {*} desktopContent
 */
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq); // detecta la media query

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
    // console.log("MQ", breakpoint, e.matches);
  };

  //   breakpoint.addListener(responsive); // evalua la media query, se ejecuta cuando detecta la mediaquery
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);
}
