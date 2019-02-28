const fs = require("fs");

var assert = require('assert');
var pdftojson = require("../pdftojson.js");

let testArray = [];
let dir = JSON.parse(fs.readFileSync("./PDFConvertConfig.json", "utf8"));
let dirFiles = fs.readdirSync(dir.pdfDir);
let dirLength = dirFiles.length;

describe("Creating file",function(done) {

    beforeEach(function(done){
        pdftojson();
        done();
    });

    console.log(testArray);
    describe("Testing if file has been created",function(){
        it("Should pass if JSON file is produced", function(done) {
                testArray = (fs.readdirSync);
                for(let i = 0; i < testArray.length; i++){
                     assert.equal((testArray[i] == "boob.json")),true;
                }
            })
        done();
    });
});
