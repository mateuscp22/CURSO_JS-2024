// Objeto constante: permite a auteração do dado, mas não permite auteração da constante
const pessoa = {
  nome: "Mateus",
};
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa = { nome: "Ana" };

Object.freeze(pessoa); // Congela o objeto

pessoa.nome = "Maria";
pessoa.end = "Rua 123";
delete pessoa.nome;

console.log(pessoa);

// Objeto constante freeze: não permite modificação da estrutura, adição de novos atributos ou informações
const pessoaConstante = Object.freeze({
  nome: "João",
});

pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
