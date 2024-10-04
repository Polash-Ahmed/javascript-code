var arr = [1, 2, 3, 4, 5, 6];

// var sum = arr.reduce(function (prev, curr){
//   return prev + curr
// }, 100)

// var max = arr.reduce(function(prev, curr){
// return Math.max(prev,curr)
// },0)

// console.log(sum)
// console.log(max)

function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);

var max = myReduce(
  arr,
  function (prev, curr) {
    return Math.max(prev , curr);
  },
  0
);

var min = myReduce(
  arr,
  function (prev, curr) {
    return Math.min(prev , curr);
  },
  arr[0]
);

console.log(sum, max, min);


// advance reduce

const result = numbers.reduce((acc,cur,index)=>{
  if(index === 0) acc += '[';
  if(cur){
    acc += cur.toString()+ (index < numbers.length-1 ? ', ':'');
  }
  if(index===numbers.length) acc+= ']';
  return acc;
}, '')
console.log(result)
