
function loveLetter(L, N){
  let charmap = {};
  for(let i =0; i< L.length; i++){
    if (charmap.hasOwnProperty(L[i])){
      charmap[L[i]]++;
    }
    else{
      charmap[L[i]] = 1;
    }
  }
  console.log(charmap)

  for(let j=0;j<N.length;j++){
    if (charmap.hasOwnProperty(N[j])){
      if(charmap[N[j]]===1){
        delete charmap[N[j]];
      }
      else{
        charmap[N[j]]--;
      }
    }
  }
  console.log(charmap)
  return Object.keys(charmap).length === 0;
}

let L = 'love'
let N = 'ljhkhkove'
console.log(loveLetter(L,N))
