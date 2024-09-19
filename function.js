// Function in javascript
// What is function
// input output processing

// function invoke mane function use kora
function functionName(x,y,z,d,f) {
  console.log(d*f)
  console.log(y+z)
  console.log(x)
  console.log('i am a function')
}
functionName("hello bangladesh",20,29,2,3)

function add() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}
add()

function sub() {
  var a = 30;
  var b = 20;
  console.log(a - b);
}
sub()

// Arguments function

// function add(a, b) {
//   var result = a + b;
//   console.log(result);
// }
// add(10,20)
// add(500,700)

// var arr1 = [1,2,3]
// var arr2 = [4,5,6]
// var arr3 = [7,8,9]

// function sumOfArray(arr){
// var sum = 0;
// for(var i = 0; i<arr.length;i++){
//   sum +=arr[i]
// }
// console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)


// Arguments

function test(){
  // console.log(arguments)
  for(var i = 0; i<arguments.length; i++){
    console.log(arguments[i])
  }
}
test(10, 20, 30)

function addAll(){
  var sum = 0
  for (var i = 0; i <arguments.length; i++){
    sum +=arguments[i]
  }
  console.log(sum)
}
addAll(1,2,3,4)
addAll(6,7,9,9)





// function test(){
//   // console.log(arguments)
//   for(var i = 0; i<arguments.length; i++){
//     console.log(arguments[i])
//   }
// }
// test(10, 20, 30)

function addAll(){
  var sum = 0
  for (var i = 0; i <arguments.length; i++){
    sum +=arguments[i]
  }
 return sum
  // console.log('hello') not working
}
var result = addAll(1,2,3,4)
console.log(result)

// Function expression

var addition = function(a,b){
  return a+b
}
addition(10,20)

setTimeout(function() {
  console.log('i will call after 5 minutes')
}, 5000);

var another = addition
console.log(another(7,8))


// Inner function

function something(greet, name){
  function getFristName(){
    if(name){
      return name.split(' ')[0]
    }else{
      return ''
    }
  }
  var message = greet + ' '+ getFristName()
  console.log(message)
}
something("good morning", "polash ahmed")
