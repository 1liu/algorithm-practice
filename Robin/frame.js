/* In this case, for all the enclosed brackets, there should 4 characters printed, and only the start and end of the bracket should have the # character printed - the remaining two characters should be two spaces. If the number were five, for example, we should display the two brackets each started and ending with # symbols and with three spaces in between.

Since you do not own any small photos, you need to make sure that your machine won't make a frame if the width or height is 3 or less.
 */
function frame(height, width, character) {
  if (height <= 3 || width <= 3) return 'frame height or width must be greater than 3';
  let result = [];
  for (let i = 0; i < height; i++) {
    let row = [];
    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1 || j === 0 || j === width - 1) row.push(character);
      else row.push(' ');
    }
    result.push(row);
  }
  return result;
}

console.log(frame(2, 2, '*'))
console.log(frame(4, 4, '*'))
console.log(frame(4, 7, '#'))
