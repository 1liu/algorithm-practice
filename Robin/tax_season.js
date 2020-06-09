/*
 write a function that accepts a dollar amount and a tax percentage and returns the taxed amount in cents?
 */
function func(dollar, percentage) {
  return ((dollar * percentage) / 100).toFixed(2);
}

console.log(func(100, 50));
