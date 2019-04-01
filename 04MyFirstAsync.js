//   Write a program that uses a single asynchronous filesystem operation to  
//   read a file and print the number of newlines it contains to the console  
//   (stdout), similar to running cat file | wc -l.  
const fs = require('fs');
const filename = process.argv[2];

const filebuffer = fs.readFile(filename, (err,data)=>{
    if(err){console.log(err); throw err}
    let strdata = data.toString()
    console.log(strdata.match(/[\n]/gi).length)
})

