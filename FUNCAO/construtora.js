function Carro(velocidadeMaxima = 200, delta = 5) {
  //Atributo Privado
  let velociadeAtual = 0;

  //Método publico
  this.acelerar = () => {
    if (velociadeAtual + delta <= velocidadeMaxima) {
      velociadeAtual += delta;
    } else {
      velociadeAtual = velocidadeMaxima;
    }
  };

  //Metodo publico
  this.getVelocidadeAtual = () => {
    return velociadeAtual;
  };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
