const notas = [7, 7.7, 8, 5.2, 9, 10, 9.1, 3.6];

{
  // sem callback
  const notasBaixas = [];
  for (let i in notas) {
    if (notas[i] < 7) {
      notasBaixas.push(notas[i]);
    }
  }

  console.log(notasBaixas);
}

{
  // com callback
  //Exemplo_01
  const notasBaixas2 = notas.filter((nota) => nota < 7);
  console.log(notasBaixas2);

  //Exemplo_02
  const notasMenorQue7 = (nota) => nota < 7;
  const notasBaixas3 = notas.filter(notasMenorQue7);
  console.log(notasBaixas3);
}
