// Closure é o escopo criado quando uma fuinção é declarada
// Esse escopopermite a função acessar e manipular variáveis externas à função

const x = "Global";

fora = () => {
  const x = "Local";
  dentro = () => {
    return x;
  };
  return dentro;
};

const minhaFun = fora();
console.log(minhaFun());
