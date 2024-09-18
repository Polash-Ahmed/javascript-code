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

// Lterate Object Properties in Javascript
var obj = {
  x: 40,
  y: 60,
  z: 78,
};
// console.log('x' in obj)
// console.log('b' in obj)

for(var i in obj){
  console.log(i)
  console.log(i + ': '+obj[i])
}


// obj methid
var obj = {
  x: 40,
  y: 38,
  z: 75,
};
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

var obj2 = obj
obj2.x =70
obj2.y = 100

console.log(obj)
console.log(obj2)

// new object create

var obj2 = Object.assign({}, obj)
obj2.x = 100
console.log(obj)
console.log(obj2)
