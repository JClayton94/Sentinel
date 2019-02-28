const express = require('express');
const app = express();
const port = 2008;
let fs = require('fs'),
json;





module.exports.returnOutput =  function(){
let rawOutput = fs.readFileSync('exampleoutput.json')
let output = JSON.parse(rawOutput);
    //send to front end//
app.get('/',(req,res)=>res.send(output));
app.listen(port,function(){
    console.log(`listening on port ${port}`);
})

}


