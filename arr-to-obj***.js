const { v4: uuidv4 } = require('uuid');

const students = {
 '650d83c7-aa4e-467b-a2a1-398d670f7279': {
    id: '650d83c7-aa4e-467b-a2a1-398d670f7279',
    name: 'polash ahmed',
    email: 'polash@gmail.com'
  },
  'ee8e3283-745e-40d0-86b6-3c9dbcffed8c':{
    id: 'ee8e3283-745e-40d0-86b6-3c9dbcffed8c',
    name: 'poran ahmed',
    email: 'poran@gmail.com'
  },
  '99986655-c55b-47ae-ad15-b09367f54a4a':{
    id: '99986655-c55b-47ae-ad15-b09367f54a4a',
    name: 'sojib ahmed',
    email: 'sojib@gmail.com'
  }

}
/**
 * 1. Easily Traverse (O(n))
 * 1.1 Get anything if you have the key : O(1)
 * 2. Filter
 * 3. Delete (Medium) O(1)
 * 4. Update (Medium) O(1)
 * 5.Create a new one (easy) O(1)
 */

const std = {
  id: uuidv4(),
  name: 'firoz khan',
  email: 'firoz@gmail.com'
}

students[std.id] = std 

const idToBeUpdated = '99986655-c55b-47ae-ad15-b09367f54a4a';
const updatedData = {
  name: 'HM Azizul',
  email: 'azizul@gmail.com'
}
// update data
students[idToBeUpdated] = {
  ...students[idToBeUpdated],
  ...updatedData,
}

// delete students[idToBeUpdated]; //delete data

// console.log(students[ 'ee8e3283-745e-40d0-86b6-3c9dbcffed8c']) get data

// for (let key in students){
//   console.log(students[key].name)
// }

// one of the tyle
// Object.keys(students).forEach((key)=>{
//   const student = students[key]
//   console.log(student.name, student.email)
// })

Object.values(students).forEach((student)=>{
  console.log(student.name, student.email)
})
