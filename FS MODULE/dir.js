const fs = require('fs');

if(!fs.existsSync('./newFold')){ //this will check if the directory mentioned exist or not
    fs.mkdir('./newFold',(err)=>{
        if (err) throw err;
        console.log("Directory created");
    });
};
if(fs.existsSync('./newFold')){ //this will check if the directory mentioned exist or not
    
    fs.rmdir('./newFold',(err)=>{
        if (err) throw err;
        console.log("Directory Removed");
    });
};