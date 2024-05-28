function Pessoa(nome) {
  this.nome = nome;
  this.falar = () => console.log(`Meu nome é ${this.nome}`);
}

const p1 = new Pessoa("Mateus");
p1.falar();

/* class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("Mateus");
p1.falar(); */
