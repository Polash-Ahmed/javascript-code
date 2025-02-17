function squire(num){
  return num*num
}

function memoSqr(){
  let cache = {};
  return function optimizedSrq(num){
    if(num in cache){
      console.log('Returning from cache');
      return cache[num];
    }else{
      const result = squire(num);
      cache[num] = result;
      console.log('Computing Square');
      return result;
    }

  }
}
const memoSquare = memoSqr();
console.log(memoSquare(4));
console.log(memoSquare(4));
