//create solution array for the first row winning conditions
//expected output [[0,1,3,4],[1,2,3,4], ... ]

// let firstRowSolutions = [];
// for (let i = 0; i<4; i++){
//   rowSolutions.push([0,1,2,3].map(x => x + i))
// }
//
// console.log(rowSolutions);

//create solution array for all row winning conditions

let allRowSolutions = [];
for (let i = 0; i<41; i++){
  if (i % 7 < 4) {
    allRowSolutions.push([0,1,2,3].map(x => x + i))
  }
}

// console.log(allRowSolutions);

//create solution array for vertical winning
let allColumnSolutions = [];
for (let i = 0; i<21; i++){
  if (i%7 <7) {
    allColumnSolutions.push([0,7,14,21].map(x => x + i))
  }
}
// console.log(allColumnSolutions);

let rightSolutions = [];
for (let i = 0; i<21; i++){
  if (i%7 < 4) {
    rightSolutions.push([0,8,16,24].map(x => x + i))
  }
}
// console.log(rightSolutions);

let leftSolutions = [];
for (let i = 0; i<21; i++){
  if (i%7 < 4) {
    leftSolutions.push([3,9,15,21].map(x => x + i))
  }
}
// console.log(leftSolutions);

//create an array for all solutions
let allSolutions = [...allRowSolutions, ...allColumnSolutions, ...rightSolutions, ...leftSolutions];

console.log(allSolutions.length); //69 winning conditions
