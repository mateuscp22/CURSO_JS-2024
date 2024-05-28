const porta = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bancoDeDados = require("./dataBase");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  /* res.send({ nome: "notebook", preco: 123.45 }); // Converter para JSON */
  res.send(bancoDeDados.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //JSON
});

app.put("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //JSON
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.excuilirProduto(req.params.id);
  res.send(produto); //JSON
});

app.listen(porta, () => {
  console.log(`Servidor está execurando na porta ${porta}`);
});
