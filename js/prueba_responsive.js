const d = document;

export default function responsiveTester(from) {
  const $form = d.getElementById(from);
  let tester; // cuando quieres trabajar con window.open o window.close tienes que almacenar en una variable

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault(); // cancelar el autoproceso

      //   alert("Formulario");

      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth = ${$form.ancho.value}, innerHeight = ${$form.alto.value}`
      );
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
