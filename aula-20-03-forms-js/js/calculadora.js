const form = document.getElementById('formCalculadora');
const inputNum1 = document.getElementById('Inputnum1');
const listaNum2 = document.getElementById('listanum2');
const resultado = document.getElementById('resultado');

form.addEventListener('submit' , function(event) {
      eventprevedefault()

      // Pegando valFores do input e da lista
      const num1 = parseFloat(inputNum1.value);
      const num2 = parseloat(listaNum2.value);

      if (isNaN(num1) || isNaN(num2)) {
          resultado.textContent = "Por favor, insira números válidos.";
          return;
      }

      // Realizando a soma (pode modificar para outras operações)
      const soma = num1 + num2;
      
      // Exibindo o resultado
      resultado.textContent = `Resultado: ${soma}`;
  });


