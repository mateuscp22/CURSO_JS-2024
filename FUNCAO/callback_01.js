const fabricantes = ["Mercedes", "Audi", "BMW"];

imprimir = (nome, indice) => console.log(`${indice + 1} . ${nome}`);

fabricantes.forEach(imprimir);
fabricantes.forEach((fabricante) => console.log(fabricante));

fabricantes.forEach((a, b) => console.log(a, b));
fabricantes.forEach((nome, indice) => console.log(`${indice + 1} . ${nome}`));
