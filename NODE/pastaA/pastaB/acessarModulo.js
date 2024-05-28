const moduloA = require("../../moduloA");
const moduloB = require("../../moduloB");

console.log(moduloA);
console.log(moduloB);

const http = require("http");
http
  .createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
  })
  .listen(8080);

const c = require("./pastaC");
console.log(c.ola2);
