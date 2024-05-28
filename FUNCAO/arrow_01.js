let dobro = function (a) {
  return 2 * "a";
};

dobro2 = (a) => {
  return 2 * a;
};

dobro3 = (a) => 2 * a;

console.log(dobro(5)); //10
console.log(dobro2(4));
console.log(dobro3(Math.PI));

ola = (_) => "Olá";
console.log(ola());


function soma(a, b) {
  return a + b;
}

console.log(soma(4, 7));

soma1 = (a, b) => console.log(a + b);
soma1(10, 5);