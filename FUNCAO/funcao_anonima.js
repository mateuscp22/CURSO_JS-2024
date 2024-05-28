const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(5, 7, soma);
imprimirResultado(10, 6, function (x, y) {
  return x - y;
});

imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  falar: () => console.log("Olá"),
};

pessoa.falar();
