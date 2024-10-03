const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
  { id: 4, value: 40 },
  { id: 5, value: 50 },
];

// console.log(arr)
// imutable
// const index = arr.findIndex(function (v) {
//   return v.id === 4;
// });
// arr[index].value = 400;
// console.log(arr)

// mutable
// const obj = arr.find(function(v){
//   return v.id === 4
// })
// obj.value = 400
// console.log(arr)
// console.log(obj)

// splice -> mutable

// const index = arr.findIndex(item => item.id === 4)
// const arr1 = arr.splice(index,1)
// console.log(arr)
// console.log(index)

// filter imutable
// const arr2 = arr.filter(item => item.id === 4);
// console.log(arr)
// console.log(arr2)
