// Find array length

var arr = [1,2,3,4,5,6]

var sum = 0

for(var i = 0;i<arr.length;i++){
  sum += arr[i]
}
console.log(sum)


// Array Traversing even number sumation

var sum = 0
for(var i = 0;i<arr.length;i++){
  if(arr[i]%2===0){
    console.log(arr[i])
    sum = sum+arr[i]
  }
}
console.log('sum = '+sum)

// Array Traversing odd number sumation

var sum1 = 0
for(var i = 0;i<arr.length;i++){
  if(arr[i]%2===1){
    console.log(arr[i])
    sum1 = sum1+arr[i]
  }
}
console.log('sum = '+sum1)


// Arrey method

var arr = [1,2,3,4,5,6,7,8]
// arr[3] = 9
// arr.push(9)
// arr.unshift(9)
// arr.splice(3,0,9,10)
// arr[3] = undefined
// arr.pop()
// arr.shift()
// arr.splice(3,1)
arr.splice(3,1,44)
console.log(arr)

