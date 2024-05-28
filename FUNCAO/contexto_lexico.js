const valor = "Global";

minhaFunc = () => console.log(valor);

exec = () => {
  const valor = "Local";
  minhaFunc();
};

exec();
