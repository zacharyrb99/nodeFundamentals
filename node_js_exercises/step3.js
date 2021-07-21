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

function catWrite(path){
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            process.exit(1);
        }else{
            fs.writeFile(process.argv[3], data, err => {
                if(err){
                    console.log(err)
                    process.exit(1)
                }else{
                    console.log(`${process.argv[3]} text was written to ${path}`)
                }

            })
        }
    })
}

async function webCatWrite(url){
    try{
        let response = await axios.get(url);
        fs.writeFile(process.argv[3], response.data, err => {
            if(err){
                console.log(err);
                process.exit(1);
            }else{
                console.log(`${url} HTML was written to ${process.argv[3]}`);
            }
        })
    }catch(err){
        console.log(`I couldn't get ${url} data: ${err}`);
        process.exit(1)
    }
}

let arg = process.argv[2];

if(arg == '--out'){
    if(process.argv[4].includes('.txt')){
        catWrite(process.argv[4]);
    }else{
        webCatWrite(process.argv[4])
    }
}else{
    if(process.argv[2].includes('.txt')){
        cat(process.argv[2]);
    }else{
        webCat(process.argv[2])
}
}
