triangulo = (x, y, z) => {
  // Check for equilateral triangle
  if (x == y && y == z) console.log("Equilateral Triangle");
  // Check for isosceles triangle
  else if (x == y || y == z || z == x) console.log("Isosceles Triangle");
  // Otherwise scalene triangle
  else console.log("Scalene Triangle");
};

//Equilatero
triangulo(3, 3, 3);

//Isosceles
triangulo(3, 3, 2);
triangulo(2, 3, 3);
triangulo(3, 2, 3);

//Escaleno
triangulo(5, 4, 6);
