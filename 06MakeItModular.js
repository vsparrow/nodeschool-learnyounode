const filterFiles = require('./moduleExported.js')

// function tester(dirname,extension, caller){
//         console.error("&&&&&&&&&&&&&&&&&&")
//     let x = filterFiles(dirname,extension, caller)//.forEach(file => console.log(file))
//     console.error("**************")
//     console.error(x)
// }

filterFiles(process.argv[2],process.argv[3],(err,data)=>{
    if (err) {console.error(err)}
    // console.log(data)
    data.forEach(item => console.log(item))
})