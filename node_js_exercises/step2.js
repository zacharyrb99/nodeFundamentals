const fs = require('fs');
const axios = require('axios');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log(err);
        }else{
            console.log(`File contents:\n${data}`);
        }
    })
}

async function webCat(url){
    try{
        let response = await axios.get(url);
        console.log(response.data);
    }catch(err){
        console.log(`Couldn't get ${url} data: ${err}`)
        process.exit(1)
    }
}

let arg = process.argv[2];

if(arg.includes('.txt')){
    cat(process.argv[2]);
}else{
    webCat(process.argv[2])
}
