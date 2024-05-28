const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "generica";
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000.0,
  proprietario: {
    nome: "Mateus",
    idade: 24,
    endereco: {
      logradouro: "Rua 123",
      numero: 1065,
    },
  },
  condutores: [
    {
      nome: "Pedro",
      idade: 19,
    },
    {
      nome: "Luiza",
      idade: 17,
    },
  ],

  calcularSeguro: (valorBase) => {
    console.log("Aqui tem uma função");
  },
};

console.log(carro);
carro.calcularSeguro();

carro.proprietario.endereco.numero = 1000;
carro[`proprietario`]["endereco"]["logradouro"] = "Av 50";

console.log(carro);
