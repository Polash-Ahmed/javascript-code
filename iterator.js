let arr = [1,2,3]


function createIterator(collection){
  let i = 0
  return{
    next(){
      return {
        done: i>=collection.length,
        value: collection[i++]
      }
    }
  }
}

let iterate = createIterator(arr)

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

// es6 iterator

const arr = [1,2,4]

let iterate = arr[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

let str = 'TEXT'
let itereteText = str[Symbol.iterator]()

console.log(itereteText.next())
console.log(itereteText.next())
console.log(itereteText.next())
console.log(itereteText.next())
console.log(itereteText.next())
