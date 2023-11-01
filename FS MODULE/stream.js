// we are trying to process stream data and as soon as we get we are putting it in a new file

const path = require('path');

const fs = require('fs');

const rs = fs.createReadStream(path.join(__dirname , 'bigText.txt') , 'utf-8');
const ws = fs.createWriteStream(path.join(__dirname ,'newBigText.txt'));

// one way
rs.on('data',(dataChunk)=>{
    console.log(dataChunk);
    ws.write(dataChunk);
})

//other way (more efficient)
const nws = fs.createWriteStream(path.join(__dirname ,'PipeBigText.txt'));
rs.pipe(nws);
