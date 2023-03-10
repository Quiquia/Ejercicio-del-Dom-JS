const d = document,
  ls = localStorage;

// export default function darkLight(btn, classDark) {
//   const $darkLight = d.querySelector(btn),
//     $selectors = d.querySelectorAll("[data-dark]");

//   console.log($selectors);

//   let moon = "🌙",
//     sun = "☀️";

//   d.addEventListener("click", (e) => {
//     if (e.target.matches(btn)) {
//       console.log($darkLight.textContent);
//       if ($darkLight.textContent === moon) {
//         $selectors.forEach((el) => el.classList.add(classDark));
//         $darkLight.textContent = sun;
//       } else {
//         $selectors.forEach((el) => el.classList.remove(classDark));
//         $darkLight.textContent = moon;
//       }
//     }
//   });
// }

export default function darkLight(btn, classDark) {
  const $darkLight = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $darkLight.textContent = moon;
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $darkLight.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($darkLight.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("themen") === null) ls.setItem("themen", "light");
    if (ls.getItem("themen") === "light") lightMode();
    if (ls.getItem("themen") === "dark") darkMode();
  });
}

/******************metodo 3****************** */

// export default function darkLight(btn, classDark) {
//   const $darkLight = d.querySelector(btn);
//   let moon = "🌙",
//     sun = "☀️";

//   const lightMode = () => {
//     d.documentElement.setAttribute("data-theme", "light");
//     $darkLight.textContent = moon;
//     ls.setItem("themen", "light");
//   };
//   const darkMode = () => {
//     d.documentElement.setAttribute("data-theme", "dark");
//     $darkLight.textContent = sun;
//     ls.setItem("themen", "dark");
//   };

//   d.addEventListener("click", (e) => {
//     if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
//       const theme = d.documentElement.getAttribute("data-theme");

//       if (theme === "dark") {
//         darkMode();
//       } else {
//         lightMode();
//       }
//     }
//   });

//   d.addEventListener("DOMContentLoaded", (e) => {
//     if (ls.getItem("themen") === null) ls.setItem("themen", "light");
//     if (ls.getItem("themen") === "light") lightMode();
//     if (ls.getItem("themen") === "dark") darkMode();
//   });
// }
