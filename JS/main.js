'use strict';
//console.log('O console funcionou corretamente');

//Condição simples: quando só se tem o IF (se)
/*var velocidade = 32.5;
console.log(`A velocidade do seu carro é ${velocidade}km/h`);
if(velocidade >= 60){ 
  console.log('Você ultrapassou a velocidade permitida. MULTADO!');
};
console.log('Dirija sempre usando segurança!');
*/

//Condição composta: quando se tem o ELSE (senão) após uma condição com IF.
var pais = 'EUA';
console.log(`Vivendo em ${pais},`);
if(pais == 'Brasil'){
  console.log('Você é brasileiro!');
} else {
  console.log('Você é estrangeiro!');
};

function calcular(){
  var txtvel = window.document.getElementById('txtvel');
  var resultado = window.document.getElementById('situacao');
  var velocidade = Number(txtvel.value);

  resultado.innerHTML = `<p>Sua velocidade é igual a: <strong> ${velocidade}km/h </strong></p>`;
  //No caso, também é possível concatenar strings com operadores de atribuição, em vez de somar NaN
  if(velocidade <= 0){
    resultado.innerHTML = '<p>Digite um valor acima de zero!</p>'; 
  }else if (velocidade >= 60){
    resultado.innerHTML += '<p>Você está <strong>multado</strong> por excesso de velocidade</p>';
    resultado.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'
  } else{
    resultado.innerHTML += '<p>Você está abaixo da velocidade limite. <strong>Parabéns!</strong></p>'
    resultado.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'
  }

  
}
