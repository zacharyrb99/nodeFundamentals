const fs = require('fs');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            console.log(`File contents:\n${data}`);
        }
    })
}

cat(process.argv[2]);