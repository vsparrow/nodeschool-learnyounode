//   print a list of files in a given directory,  
//   filtered by the extension of the files. 

const fs = require("fs")
const pathname = process.argv[2]
const filterExtension = process.argv[3]
fs.readdir(pathname,(err,list)=>{
    if (err) {console.log(err)}
    const filtered = list.filter(fname => {
        let arr =fname.split("").reverse().slice(0,filterExtension.length + 1).reverse().join("") 
        //+1 to make sure the . is part of filename
        return (arr == "."+filterExtension)
    })
    filtered.forEach(file => console.log(file))
})
