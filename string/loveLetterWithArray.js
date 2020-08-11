
function loveLetter(L, N) {
  let charmap = new Array(256).fill(0);
  let count = 0;
  for (let i = 0; i < L.length; i++) {
    if (charmap[L.charCodeAt(i)] === 0) {
      count++;
    }
    charmap[L.charCodeAt(i)]++;
  }
  console.log(charmap.reduce((a, b) => a + b, 0))
  console.log('count', count)
  for (let j = 0; j < N.length; j++) {
    if (charmap[N.charCodeAt(j)] > 0) {
      charmap[N.charCodeAt(j)]--;
      if (charmap[N.charCodeAt(j)] === 0) {
        count--;
      }
    }
    console.log(count)
    if (count === 0) {
      return true;
    }
  }

  return false;
}

let L = 'lowwwwve'
let N = 'ljhkhkove'
console.log(loveLetter(L, N))
