
const formulario = document.getElementById("formulario");
const result = document.getElementById("result");
formulario.addEventListener("submit", event => {
  event.preventDefault(); 
  Calcular(); 
});

function Calcular() {
 
  const number = Number(document.getElementById("input").value);

 
  if (!isNaN(number) && number > 0) {
    let num1 = 0;
    let num2 = 1;
    let resultText = "Resultado: 0"; 


    for (let i = 1; i < number; i++) {
      resultText = `${resultText}, ${num2}`;
      let suma = num1 + num2;
      num1 = num2;
      num2 = suma;
    }

    
    result.textContent = resultText;
  } else {
   
    result.textContent = "Ingresa un número válido.";
  }
}