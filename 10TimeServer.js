//  ## TIME SERVER (Exercise 10 of 13)  

const net = require("net")
const port = process.argv[2]   

const padDate = dateItem => {return dateItem < 10 ? '0' + dateItem : dateItem}

const getDate = ()=>{
    const date = new Date()    //format:  "YYYY-MM-DD hh:mm"      
     let year = date.getFullYear()
     let month = date.getMonth()
     month += 1 //months are 0 - 11
     let day = date.getDay()
     let hour = date.getHours();
     let minute = date.getMinutes()
     return `${year}-${padDate(month)}-${padDate(day)} ${padDate(hour)}:${padDate(minute)}`
}//getData
   
 
let server = net.createServer( socket =>{
    console.log(`getDate is ${getDate()}`)
    socket.end(getDate() + '\n')
}) //createServer

server.listen(port)

   



