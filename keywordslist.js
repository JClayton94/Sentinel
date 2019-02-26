let mongoose = require('mongoose');
let url = "mongodb://localhost:27017/sentineldatabase";
let keywordSchema = new mongoose.Schema({
        word: String,    
    }) 
let keywordModel = mongoose.model('keywords', keywordSchema);
let keywordlist = [{word: 'plum'},{word:'plumboy'},{word:'Sentinel'}, {word:'keyword'},{word:'tea'} ]
mongoose.connect(url);
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    keywordModel.insertMany(keywordlist, function(err){
        if (err) return console.error(err);
        console.log('words in database!');
    });
    keywordModel.find(function (err, keywordlist){
        if (err) return console.error(err);
        console.log(keywordlist);
    });
    process.on('SIGINT',function(){
        db.close(function (){
            console.log('disconnected');
            process.exit(0);
        })
    });
});
