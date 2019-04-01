// ## JUGGLING ASYNC (Exercise 9 of 13)  
const http = require('http')
const url1 = process.argv[2], url2 = process.argv[3], url3 = process.argv[4]

const httpConnect = (urls = [url1,url2,url3]) => {
    const url = urls.shift()
    http.get(url,(res)=>{
        let rawData = ""
        res.setEncoding('utf8')
        res.on('data', chunk => rawData += chunk)
        res.on('end', ()=>{
            console.log(rawData)
            if(urls.length > 0) { httpConnect(urls)}
        })
    })
}//httpConnect

httpConnect([url1,url2,url3])


