import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#operacion-form");
const div = document.querySelector("#resultado-div");

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const submitButtonValue = event.submitter.value;

  let resultado;
  if (submitButtonValue === 'sumar') {
    resultado = sumar(firstNumber, secondNumber);
  } else if (submitButtonValue === 'multiplicar' ) {
    resultado = multiplicar(firstNumber, secondNumber);
  }
  div.innerHTML = "<p>" + resultado + "</p>";
});
