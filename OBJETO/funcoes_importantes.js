const pessoa = {
  nome: "Mateus",
  idade: 20,
  peso: 90,
};

console.log(Object.keys(pessoa)); // Retorna todas  as chaves do objeto como um array
console.log(Object.values(pessoa)); //Retorna todos os valores
console.log(Object.entries(pessoa)); //Retorna todas as propriedades e seus respectivos valores em pares

{
  /*     
  Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`);
  });
 */
  Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
  });
}

// Definindo caracteristicas de uma propriedade
Object.defineProperty(pessoa, "dataNascimento", {
  Enumerator: true,
  Writable: false,
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/02/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign
// Concatena todos os atributos em um objeto de destino
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(dest);
