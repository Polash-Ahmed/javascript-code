// OBJECT

// empty obj
var obj = {}
obj.x = 10

console.log(obj)


// object literal
var point = {
  x:10,
  y:20
}

point.z = 30

console.log(point)


// object constractor
var obj = Object()

obj.a = 10
console.log(obj)

var obj2 = new Object()
obj2.b = 20

console.log(obj2)


// object notaion
var point = {
  x: 10,
  y: 20,
  z:30
}
// dot notation
// console.log(point.y)
// console.log(point.z)
// console.log(point.y+point.z)
// point.x = 5
// point.a = 16
// console.log(point)


// array notation
// console.log(point['x'])
// console.log(point['y'])

// var show = 'x'
// console.log(point[show])

// update property
point['y'] = 100
var prop = 'z'
point[prop] = 55
console.log(point)

// delete property
point.a = undefined
console.log(point)

delete point.a
console.log(point)

// Object compare
var obj1 = {
  a: 10,
  b: 20
}
var obj2 = {
  a: 10,
  b: 20
}


if(obj1.a===obj2.a && obj1.b ===obj2.b){
  console.log(true)
}else{
  console.log(false)
}

// console.log(obj1)
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
