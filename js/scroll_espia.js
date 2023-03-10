const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    // console.log("entries", entries);

    entries.forEach((entry) => {
      // console.log("entry")
      const id = entry.target.getAttribute("id");
      const strId = `a[data-scroll-spy][href="#${id}"]`;
      // console.log(strId);

      if (entry.isIntersecting) {
        // console.log(d.querySelector(strId));
        d.querySelector(strId).classList.add("active");
      } else {
        d.querySelector(strId).classList.remove("active");
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    //root
    // rootMargin: "-250px",
    threshold: [0.5, 0.75], // cuando este a los 50% más de su tamaño elumina el siguiente
  });

  // console.log("observer", observer);

  $sections.forEach((el) => observer.observe(el));
}
