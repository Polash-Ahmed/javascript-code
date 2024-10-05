const names = [
  "Aymen",
  "Abu Rayhan",
  "Anik",
  "Elias Emon",
  "Enger Sabbid",
  "Fahim Faisal",
  "Feroz Khan",
  "Habib",
  "HM Azizul",
  "Hridoy Saha",
  "Jahid Hasan",
  "Johir",
  "MD Al-amin",
  "MD Arafatul",
  "MD Ashraful",
  "Parvez",
];

// const nameGrouped = {
//   A: ["Aymen", "Abu Rayhan", "Anik"],
//   E: ["Elias Emon", "Enger Sabbid"],
//   F: ["Fahim Faisal", "Feroz Khan"],
// };
// console.log(nameGrouped)

const namesGrouped = names.reduce((acc, cur)=>{
  const fristletter = cur[0].toUpperCase();
  if(fristletter in acc){
    acc[fristletter].push(cur)
  }
  else{
    acc[fristletter]= [cur]
  }
  return acc
},{})

console.log(namesGrouped)

Object.keys(namesGrouped).forEach((groupKey)=>{
  console.log("_______",groupKey, '_______');
  namesGrouped[groupKey].forEach((name)=>console.log(name));
  console.log('')
  
})
