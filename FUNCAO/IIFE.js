// IIFE -> Imediately Invoked Function Expression

(function () {
  console.log("Executa na hora!");
  console.log("Escopo mais abrangente!");
})();

(() => {
  console.log("IIFE com arrow function");
})();
