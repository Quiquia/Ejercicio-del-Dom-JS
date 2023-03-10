let d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      window: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.window();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),

      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  // console.log(isMobile.android());
  // console.log(isDesktop.linux());
  // console.log(ua);

  $id.innerHTML = `
  <ul>
  <li>User Agent:<b>${ua}</b></li>
  <li>Plataforma:<b>${
    isMobile.any() ? isMobile.any() : isDesktop.any()
  }</b></li>
  <li>Navegador:<b>${isBrowser.any()}</b></li> 
  `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en chrome</mark></p>`;
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en firefox</mark></p>`;
  }
  if (isBrowser.safari()) {
    $id.innerHTML += `<p><mark>Este contenido sólo se ve en safari</mark></p>`;
  }
  if (isBrowser.opera()) {
    $id.innerHTML += `<p><mark>Este contenidp sólo se ve en opera>/mark></p>`;
  }
}
