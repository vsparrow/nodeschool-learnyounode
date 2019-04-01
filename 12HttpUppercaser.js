// Write an HTTP server that receives only POST requests and converts  
//   incoming POST body characters to upper-case and returns it to the client.  
const port = process.argv[2]
const http = require("http")
const server = http.createServer((req,res)=>{
    let body = ''
    req.on('data', data => body += data)
    req.on('end', ()=>{
        res.end(body.toUpperCase())
    })
})
server.listen(port)
