//solução 1
function verificaPalindromo(string) {
  if (!string) return "string inexistente"; //verifica se a variável é nula, vazia ou undefined

  return string.split("").reverse().join("") === string;
}
console.log(verificaPalindromo("ovo"));

//solução 2
function verificaPalindromo2 (string){
  if (!string) return "string inexistente"; //verifica se a variável é nula, vazia ou undefined
  for (let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.lengt - 1 - i]){ //string[string.lengt - 1 - i] compara caractere com caractere e não indice com indice.
    return false;
    }
  }
  return true;
}
console.log(verificaPalindromo("gato"));