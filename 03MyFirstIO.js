//   Write a program that uses a single synchronous filesystem operation to  
//   read a file and print the number of newlines (\n) it contains to the  
//   console (stdout), similar to running cat file | wc -l.  
   

const fs = require('fs');
const infileName = process.argv[2]

//Buffer object containing the complete contents of the file.  
let buffer = fs.readFileSync(infileName);
let str = buffer.toString();
const regex = '/[\n]/gi'
console.log(str.match(/[\n]/gi).length)

