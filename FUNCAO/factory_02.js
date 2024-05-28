criarProduto = (nome, preco) => {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
};

console.log(criarProduto("Notebook", 3000.0));
console.log(criarProduto("iPad", 5499.0));
