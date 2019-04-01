const fs = require('fs');
const path = require('path')

const exportFunc = (dirName, extension, callback) =>{
    fs.readdir(dirName,(err,files)=>{
        if(err){return callback(err)}
        const data = [];
        files.forEach( file => {
            if(path.extname(file) == "." + extension){data.push(file)}
        })
        callback(err, data);
    });    
}//exportFunc

module.exports = exportFunc;
