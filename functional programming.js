// Functional programming

function sqr(n) {
  return n * n;
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));




// not a pure function
var n= 10

function change(){
  n = 100
}
change()
console.log(n)


// not a pure function
var point = {
  x: 45,
  y: 30
}

function printPoint(point){
  point.x = 100
  point.y = 200

  console.log(point)
}
printPoint(point)
console.log(point)


// Frist class function

// Afunction can be stored in a Veriable
function add(a, b) {
  return a + b;
}
var sum = add;

console.log(sum(2,3));

// Afunction can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))
console.log(arr[0](5,4))

// Afunction can be stored in an Object
var obj = {
  sum: add
}
console.log(obj)
console.log(obj.sum(7, 9))

// We can create function as need
setTimeout(function() {
  console.log('i have created...')
}, 1000);
