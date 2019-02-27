let expect = require('chai').expect;
let keywordModel = require('../keywordmodelarray.js')
let mongoose = require('mongoose');
let assert = require('assert');
let keywordTest;

describe('hooks',function(){
beforeEach(function(done){
        let keywordTest = new keywordModel({words:['plum']});
        keywordTest.save(done);
     
        

})

    

                

describe('Read keywords',()=>{

    it('find list with plum ',function(done){
        keywordModel.findOne({words:'plum'},function(err,res){
            if(err) return done(err);
            assert(res.words).to.equal(['plum'])
        })
    })
})
describe('Creating keywordlist',()=>{
    it('creates keyword list',(done)=>{
        let keywordTest = new keywordModel({words:['key','words']});
        keywordTest.save()
            .then(()=>{
                assert(!keywordTest.isNew);
                done();
            })

    })
})
});