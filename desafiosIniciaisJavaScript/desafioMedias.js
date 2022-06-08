let notaA = parseFloat(gets());
let notaB = parseFloat(gets());

let resultado = ( notaA * 3.5 ) + ( notaB * 7.5);
let resultadoMedia = resultado / 11;
console.log(`MEDIA = ${resultadoMedia.toFixed(5)}`);