const http = require("http")

const port = process.argv[2]

const parseTime = (input, type) =>{    //input = 2013-08-10T12:10:15.474Z  
    const response = {}
    if(type == "parsetime"){
    let desiredInput = input.split("T")[1].split(".")[0].split(":")
        response["hour"] = parseInt(desiredInput[0])
        response["minute"] = parseInt(desiredInput[1])
        response["second"] = parseInt(desiredInput[2])
    }
    else if (type == "unixtime"){response["unixtime"] = new Date(input).getTime()}
    return response
}  //end parseTime()
 
const server = http.createServer((req,res)=>{
    const url = req.url
    const type = url.split("?")[0].split("/api/")[1]
    const inputTime = url.split("=")[1]
    res.end(JSON.stringify(parseTime(inputTime,type)))
})//server

server.listen(port)
