//   Write a program that performs an HTTP GET request to a URL provided to you  
//   as the first command-line argument. Write the String contents of each  
//   "data" event from the response to a new line on the console (stdout).  

const http = require("http")
const getData = (url)=>{
    http.get(url,(res)=>{
        const chunkHolder = []
        res.setEncoding('utf8');
        res.on('data',(chunk)=>{chunkHolder.push(chunk)})
        res.on('end', ()=>{
            chunkHolder.forEach(chunk => console.log(chunk))
        })
    })     
}
   
getData(process.argv[2])

