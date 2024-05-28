console.log(this === global);
console.log(this === module);

//Fora de uma função, o this, aponta para uma função "exports"/"module.exports"
console.log(this === module.exports);
console.log(this === exports);

//Dentro de uma função, o this, aponta para o escopo global
function logThis() {
  console.log("Dentro de uma função...");
  console.log(this === exports);
  console.log(this === module.exports);
  console.log(this === global);

  this.perigo = "...";
}

logThis();

//Em uma arrow function, this, aponta para module.exports
logThisArrow = () => {
  console.log("Dentro de uma função arrow...");
  console.log(this === exports);
  console.log(this === module.exports);
  console.log(this === global);
};

logThisArrow();
