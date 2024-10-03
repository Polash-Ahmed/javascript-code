// Imparetive Way to solution

const arr = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (!arr[j] || typeof arr[j] !== "number") {
      arr[j] = arr[j + 1];
      arr[j + 1] = undefined;
    }
  }
  if (arr[i] === undefined) {
    count++;
  }
}

arr.length -= count

console.log(arr)
// imparetive another way
const newArr = []
for(let i = 0; i<arr.length;i++){
  if(typeof arr[i] === 'number'){
    newArr.push(arr[i])
  }
}
console.log(newArr)

// Declaretive Way to solution / built in meyhod

const arr2 = [1, 2, 3, null, false, 4, 5, "", "test", 6, 7];

const filteredArray = arr.filter((v)=>typeof v === 'number')
console.log(filteredArray)
