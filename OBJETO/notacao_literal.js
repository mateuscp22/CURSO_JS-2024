{
  const a = 1;
  const b = 2;
  const c = 3;

  const obj1 = { a: a, b: b, c: c };
  const obj2 = { a, b, c };

  console.log(obj1);
  console.log(obj2);
}

{
  //Atributos dinâmicos
  const nomeAttr = "nota";
  const valorAttr = 7.87;

  const obj3 = {};
  obj3[nomeAttr] = valorAttr;
  console.log(obj3);

  const obj4 = { [nomeAttr]: valorAttr };
  console.log(obj4);
}

//Função em objeto literal
const obj5 = {
  // Forma tradicional
  funcao1: function () {
    // ...
  },
  // Exemplo de melhoria - forma reduzida
  funcao2() {},
};

console.log(obj5);
