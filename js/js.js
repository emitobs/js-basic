const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form');
const pResult = document.querySelector('#pResult');
// h1.innerHTML = "Patito <br> amarillo";
// h1.innerTest = "patito <br> feo"

// h1.classList.add('black');
// console.log({
//     h1,p,parrafito,pid,input
// })

// h1.classList.add('rojo');
// h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

// input.value = "321";

// const link = document.createElement('a');
// link.href =  "https://erizos.dev";
// link.setAttribute('href','Erizos DevOps');
// let createText = document.createTextNode("Erizos DevOps");
// link.appendChild(createText);
// pid.append(' ');
// pid.append(link);

// btn.addEventListener('click', btnOnClick);

 function sumarInputValues(event) {
     const sumaInputs = input1.value + input2.value;
     event.preventDefault();
     pResult.innerText = "Resultado: " + sumaInputs;
 }

form.addEventListener('submit', sumarInputValues)