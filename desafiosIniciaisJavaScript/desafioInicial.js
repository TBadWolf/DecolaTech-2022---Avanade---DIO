let input = gets().split(" ");
let distancia = input;
let diametro1 = input;
let diametro2 = input;

let dist = parseInt(distancia[0]);
let diam1 = parseInt(diametro1[1]);
let diam2 = parseInt(diametro2[2]);

let resultado = dist / (diam1+diam2);
print(resultado.toFixed(2));