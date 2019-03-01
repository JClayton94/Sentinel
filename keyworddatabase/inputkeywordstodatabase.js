const EXPRESS = require('express');
let mongoose = require('mongoose');
let url = "mongodb://localhost:27017/sentineldatabase";
let fs = require('fs');
const APP = EXPRESS();
const PORT = 2008;
let keywordsArray;
let keywordModel = require('./keywordmodelarray.js');

fs.readFile('NSAkeywordlist.txt',function(err,data) {
  if (err) throw err;
  keywordsArray = data.toString().split(",");
  for(let i = 0;i < keywordsArray.length;i++) {
    keywordsArray[i]= keywordsArray[i].trim();
  }
return keywordsArray;
});

APP.listen(PORT,function() {
console.log('listening on port');
});

mongoose.connect(url);
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function() {
  let wordstoinput = keywordModel({words:keywordsArray});
  wordstoinput.save(function(err) {
    if(err) throw err;
    console.log('input to database from textfile')
  });

process.on('SIGINT',function() {
db.close(function() {
  console.log('disconnected');
  process.exit(0);
})
});
});