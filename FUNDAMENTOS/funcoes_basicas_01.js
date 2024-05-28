function printSoma(a, b) {
  console.log(a + b);
}

printSoma(2, 3);

// armazenando uma função em uma variavel
const printSoma2 = function (a, b) {
  console.log(a + b);
};

printSoma2(2, 3);

// armazenando arrow function em uma variavel

const soma = (a, b) => {
  return a + b;
};

console.log(soma(5, 8));

// retorno implicito

const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));
