const PI = 3.14159;
    let R = parseFloat(gets()); //valor inserido pelo sistema automaticamente.
    let soma = (4.0/3) * PI * Math.pow (R,3); //Math.pow retorna a base elevada ao expoente, ou seja, R³
        print(`VOLUME = ${soma.toFixed(3)}`);