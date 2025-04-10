/* CONST define a variavel como constate (não pode ser alterada, neste caso, não pode trocar de elemento do html).

document.getElemntById('elementoHTML') pega um elemnto html pelo id para ser programado no JS. */
const form = document.getElementById('formTarefa');
const input = document.getElementById('InputTarefa');
const lista = document.getElementById('listaTarefa');

/* addEvenntListener adicionar uma "escuta" a um 
evento do elemento html.
'submit' é o evento que ocorre quando o formulario e enviado.
fuction(event) cria a função que sera executada quando o evento ocorrer.
event é a variavel que armazena as informações do evento que ocorreu.
*/
form.addEventListener('submit' , function(event) {
    // Evita que o formulario seja enviado e a pagina recarregada.*/
    event.preventDefault();

    // armazena o valor do input na variavel
    // trim() remove os espaços em brancos do começo e do fim do texto

    const textoTarefa = input.value.trim();

    if(textoTarefa !=''){
        // cria um elemento html do tipo 11
      const li = document.createElement('li');
      // adiciona o texto do input no elemento 11
      li.textContent = textoTarefa;

      const botaoRemover = document.createElement('buttom');
      botaoRemover.textContent = 'x';
      // Adiciona a classe remover ao botão criado
      botaoRemover.classList.add('remover');

      botaoRemover.addEventListener('click', function() {
        // remove o elemnto 11 da lista se o botão for clicado 
         lista.removechild(li);
      });
      // adiciona o botão Remover ao elemnto 11

      li.appendChild(botaoRemover);
      // adciona o elemento li a listas de tarefas 

      lista.appenChild(li);
     // limpa o valor do input 
      input.value = '';
    }
});   