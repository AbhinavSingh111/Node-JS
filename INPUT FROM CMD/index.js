// console.log(process.argv[3]);

// i want user to input 'add/remove' , 'filename' , 'filetext' in cmd and it gets executed

const fs = require('fs');

const input = process.argv;

if (input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
