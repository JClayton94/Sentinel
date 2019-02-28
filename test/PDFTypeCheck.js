const fs = require("fs");

var assert = require('assert');
var pdftojson = require("../pdftojson.js");

let testCriteria;
let testVariable = "documentJSON_1.json"
let testArray = [];

describe("Creating file",function(done) {

    beforeEach(function(done){
        pdftojson();
        done();
    });

    describe("Testing if file has been created",function(){
        it("Should pass if JSON file is produced", function(done) {
            testArray = fs.readdirSync("C:\\Users\\Admin\\Desktop\\Sentinel\\jsons");
                for(let i = 0; i < testArray.length; i++){
                    if(testArray[i].includes(testVariable)){
                        testCriteria = testArray[i]
                    }
                }
                assert.equal(testCriteria, testVariable);
            done();
        })
    });
});
