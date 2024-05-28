let comparaThisArrow = (param) => console.log(this === param);
comparaThisArrow(global); // false
