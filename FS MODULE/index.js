// Handling Files

const fs = require('fs'); // importing file system module
const path = require('path'); 

fs.readFile('./starter.txt' ,'utf-8', (err , data)=>{
    if (err) throw err
    console.log(data)
})

// or we can use path module to give paths , so that diff os does not throw err

fs.readFile(path.join(__dirname , 'starter.txt'),'utf8',(err , data)=>{
    if (err) throw err
    console.log(data);
})


// to write

const msg = "Hi this will not work."

fs.writeFile(path.join(__dirname , 'reply.txt') , msg , 'utf8' , (err)=>{
    if (err) throw err ;
    console.log("written");
})

// to append

fs.appendFile(path.join(__dirname , 'append.txt'),msg , (err)=>{
    if (err) throw err ;
    console.log("appended , creates a new file if not present")
})
// handling error

process.on('uncaughtException',(err) => {
    console.error(`There was following error ${err} `);
    process.exit(1);
})


// instead of callling one operation in the call back of other  , we can use async await to escape callback hell

// import fsPromises

const fsPromises = require('fs').promises;

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'starter.txt'),'utf8');
        console.log('data', data) ;
        fsPromises.writeFile(path.join(__dirname , 'promises_write.txt') , data);
        fsPromises.appendFile(path.join(__dirname , 'promises_write.txt') , '\n\nno that wont work');
        console.log("async await done");

    }
    catch(err){
        console.log('err', err)
    }
    
}

fileOps();
