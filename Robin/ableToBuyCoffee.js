/* f you provide this array: [1,2,3,4], it means that the contents in your pocket consist of one penny, two nickels, three dimes, and four quarters.
If you have enough change to cover your order, the function will return true. Otherwise, it'll return false.
 */
function ableToBuyCoffee(due, changes) {
  return changes[0] * 0.01 + changes[1] * 0.05 + changes[2] * 0.1 + changes[3] * 0.25 >= due;
}

console.log(ableToBuyCoffee(4.95, [5, 5, 5, 55]))
console.log(ableToBuyCoffee(4.95, [5, 5, 5, 5]))
console.log(ableToBuyCoffee(4.95, [5, 105, 5, 55]))
