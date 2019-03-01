const EXPRESS = require('express');
let mongoose = require('mongoose');
let url = "mongodb://localhost:27017/sentineldatabase";
const APP = EXPRESS();
const PORT = 2008;
let keywordModel = require('./keywordmodelarray.js');

APP.listen(PORT,function(){
console.log('listening on port');
});

mongoose.connect(url);
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){

  keywordModel.find(function (err, keywordlist){
  if (err) return console.error(err);
  APP.get('/',(req,res)=>res.send(keywordlist));
  });
    
  process.on('SIGINT',function(){
    db.close(function (){
    console.log('disconnected');
    process.exit(0);
    })
});
});