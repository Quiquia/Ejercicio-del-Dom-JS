const d = document;

export default function searchFilters(input, selector) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //   console.log(e.key); // es la tecla que se esta escribiendo
      //   console.log(e.target.value); // se autocompleta según vas escribiendo

      if (e.key === "Escape") e.target.value = "";

      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
