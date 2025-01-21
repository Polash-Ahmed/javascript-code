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

// make itaretor
const myNumbers = {};

// implimentation object itareble
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return {
        value: n,
        done: done,
      };
    },
  };
};
for (let num of myNumbers) {
  console.log(num);
}
