
let lines = gets().split("\n");
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);
// os valores são escolhidos automaticamente pelo sistema.
var quantidade = Y
var price = 0;

    if (X ==  1) {
      price  = 4.00 ;
    }
    else if (X == 2) {
      price  = 4.50 ;
    }
    else if (X == 3) {
      price  = 5.0 ;
    }
    else if (X == 4) {
      price  = 2.0 ;
    }
    else if (X == 5) {
      price  = 1.5 ;
    }
    var soma = price * quantidade;
    print(`Total: R$ ${soma.toFixed(2)}`);