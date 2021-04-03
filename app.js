// this is the example of file system (synchronous wala)
// we uses synchronous API here
// it block the event loop until the process is complete


// const fs = require('fs');
// //fs.writeFileSync('notes.txt','My name is abhishek chaudhary.');

//  fs.appendFileSync('notes.txt'," branch at kiet.");

// const sum = require('./utils.js');
// const sumOf = sum(5,7);
// console.log(sumOf);

const getNotes = require('./notes.js');

console.log(getNotes());