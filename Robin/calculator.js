function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) return 'dividing by 0 is an illegal operation';
      else return num1 / num2;
    default:
      return 'illegal operator';
  }
}

console.log(calculator(1, 1, '+'));
console.log(calculator(1, 1, '-'));
console.log(calculator(1, 1, '*'));
console.log(calculator(1, 1, '/'));
console.log(calculator(1, 0, '/'));
