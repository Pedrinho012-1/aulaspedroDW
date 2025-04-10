/* calculadora com INPUTS */
var num1 = document.getElementById('num1');
var num1 = document.getElementById('num2');
var resultado = document.getElementById('resultado2');

var btnSomar = document.getElementById('somar');
var btnSub = document.getElementById('sub');
var btnDiv = document.getElementById('div');
var btnMult = document.getElementById('mult');

btnSomar.addEventListener('click', function () {
    resultado2.innertext = "Resultado " + (parseInt(num1.value)) + (parseflot(num2.value));
});

btnSub.addEventListener('click', function () {
    resultado2.innertext = "Resultado " + (parseInt(num1.value)) + (parseflot(num2.value));
});

//------------------------------------------------------------------------------------------

var calculo = document.getElementByid('calculo');
var resultado = document.getElementByid('resultado');
var limpar = document.getElementByid('calculo');
var divisão = document.getElementByid('calculo');
var multiplicação = document.getElementByid('calculo');
var subtração = document.getElementByid('calculo');
var soma = document.getElementByid('calculo');
var igual = document.getElementByid('calculo');
var n9 = document.getElementById('n9');
var n8 = document.getElementById('n8');
var n7 = document.getElementById('n7');
var n6 = document.getElementById('n6');
var n5 = document.getElementById('n5');
var n4 = document.getElementById('n4');
var n3 = document.getElementById('n3');
var n2 = document.getElementById('n2');
var n1 = document.getElementById('n1');
var n0 = document.getElementById('n0');

var numero1 = '';
var numero2 = '';
var operacao = null;

n1.addEventListener('click' , function () {
    if (operacao == null){
        numero1 = numero1 +n1.textContent;
        calculo.innertext = numero1;
    }else{
        numero2 = numero2 +n1.textContent;
        calculo.innertext = numero1;
    }
});

//-------

divisao.addEventListener('click',function() {
    operacao = divisao.textContent;
    calculo.innertext = numero1 + " " + operacao + " " +numero2;
});

//-------

igual.addEventListener('click', function () {
    if (operacao == "/"){
        resultado.innerText = parseFloat(numero1) / parseFloat(numero2);
   
 }else if (operacao == "*"){

 }
 
 // Aqui vai os outros elses if..
 else{
    resultado.innerText = "** ERRO **";
 }
});