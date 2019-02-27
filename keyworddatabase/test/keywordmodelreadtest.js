let expect = require('chai').expect;
let keywordModel = require('../keywordmodelarray.js')
let mongoose = require('mongoose');
let assert = require('assert');


describe('hooks',function(){
    let keywordTest;
beforeEach(function(done){
        let keywordTest = new keywordModel({words:['plum']});
        keywordTest.save(done);
     
        

})

    

                

    describe('Read keywords',()=>{

        it('find list with plum ',function(done){
            keywordModel.findOne({words:'plum'},function(err,res){
                if(err) return done(err);
                // assert(res.words).equal(['plum'])
                assert(res.words == 'plum');
                done();
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

    describe('delete keywordlist',()=>{
        it('remove keyword using instance',function(done){
            
            keywordModel.deleteOne({words:['plum']})
            .then(()=> keywordModel.findOne({words:['plum']},function(err,res){
                if(err) return done(err);
                assert(res == null);
                done();
            }));
        })
    })

    describe('update keywordslist',()=>{
        it('update list with different words',function(done){
            keywordModel.updateOne(
                {words:['plum']},
                {$set:{words:['grape']}}
            )
            .then(()=>keywordModel.findOne({words:['grape']},function(err,res){
                if(err) return done(err);
                assert(res.words == 'grape');
                done();
            }))
        })
    })

                 

})
