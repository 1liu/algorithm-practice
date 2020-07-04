
function loveLetter(L, N){
  let hashmap = new Map();
  for(let i =0; i< L.length; i++){
    if(hashmap.has(L[i])){
      hashmap.set(L[i],hashmap.get(L[i]+1))
    }
    else{
      hashmap.set(L[i],1);
    }
  }

  for(let j=0;j<N.length;j++){
    if(hashmap.has(N[j])){
      if(hashmap.get(N[j])===1){
        hashmap.delete(N[j])
      }
      else{
        hashmap.set(N[j], hashmap.get(N[j] - 1))
      }
    }
  }

  return hashmap.size===0;
}

let L = 'love'
let N = 'ljhkhkove'
console.log(loveLetter(L,N))
