const express = require('express');
let mongoose = require('mongoose');
let url = "mongodb://localhost:27017/sentineldatabase";
let fs = require('fs');
const app = express();
const port = 2008;
let keywordsarray;
let keywordModel = require('./keywordmodelarray.js');

fs.readFile('NSAkeywordlist.txt',function(err,data){
    if (err) throw err;
    keywordsarray = data.toString().split(",");
    for(let i = 0;i < keywordsarray.length;i++){
        keywordsarray[i]= keywordsarray[i].trim();

    }
    return keywordsarray;
});

app.listen(port,function(){
console.log('listening on port');
});
mongoose.connect(url);
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    let wordstoinput = keywordModel({words:keywordsarray});
    wordstoinput.save(function(err){
        if(err) throw err;
        console.log('input to database from textfile')
    });
    
    process.on('SIGINT',function(){
        db.close(function (){
            console.log('disconnected');
            process.exit(0);
        })
    });
});


