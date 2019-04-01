// Write an HTTP server that serves the same text file for each request it  receives.  
const http = require("http")
const fs   = require("fs")
const port = process.argv[2]   
const file = process.argv[3]

const server = http.createServer((req,res) => {
    let readStream = fs.createReadStream(file)
    readStream.on('open',()=>{readStream.pipe(res)})
    readStream.on('error',(err)=>res.end(err))    
})
server.listen(port)

