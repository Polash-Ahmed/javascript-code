var personts = [
  {
    name:'A',
    age:25
  },
  {
    name:'B',
    age:26
  },
  {
    name:'C',
    age:22
  },
  {
    name:'D',
    age:21
  },
]

var arr = [1,-2,2,6,9,7,5,8]

// personts.sort()
// console.log(personts)
// arr.sort()
// console.log(arr)

arr.sort(function(a,b){
  if(a>b){
    return 1
  }else if(a<b){
    return -1
  }
  else{
    return 0
  }
})
console.log(arr)

personts.sort(function(a,b){
  if(a.age > b.age){
    return 1
  }else if(a.age <b.age){
    return -1
  }else{
    return 0
  }
})
console.log(personts)

var res1 = arr.every(function(value){
  return value % 2===0
})
console.log(res1)

var res2 = arr.every(function(value){
  return value >=0
})
console.log(res2)

var res3 = arr.some(function(value){
  return value%2===1
})
console.log(res3)

var res4 = arr.some(function(value){
  return value<0
})
console.log(res4)
