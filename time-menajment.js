const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
  const o = {
    id: i,
    value: i,
  };

  arr.push(o);
  arrToObj[i] = o;
}

// object time perfarmence
console.time("find");
let id = 4999999;
const obj = arr.find((item) => item.id === id);
obj.value = 555;
console.timeEnd("find");

// object time perfarmence
console.time("obj");
arrToObj[id].value = 999;
console.timeEnd("obj");

// unshift

const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++) {
  const o = {
    id: i,
    value: i,
  };

  arr.push(o);
  arrToObj[i] = o;
}

// object time perfarmence
console.time("array");
arr.unshift({
  id: 5000000,
  value: 5000000,
})
console.timeEnd("array");


console.time("obj");

// reduce

const arr = [];
for (let i = 1; i <= 5000000; i++) {
  arr.push(i);
}

console.time('not-optimized')
arr.filter(item => item%2===0).map(item => item*2)
console.timeEnd('not-optimized')

console.time("not-optimized");
arr.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);
console.timeEnd("not-optimized");

arrToObj[5000000] = {
  id: 5000000,
  value: 5000000,
}
console.timeEnd("obj");

// another reduce


function myReduce(array, cb, init){
  let acc = init;
  for(let i = 0; i<array.length;i++){
    acc = cb(acc, array[i], i, array)
  }
  return acc;
}

// multiple reduce
const sum = myReduce([1,2,3],(a,b)=>a+b,0)
console.log(sum)

const arr = [1,2,'',false,3,NaN,false,4,5,NaN,6]

const result = myReduce(arr,(acc,cur)=>{
  if(cur){
    acc.push(cur*cur)
  }
  return acc;
}, [])

console.log(result)
