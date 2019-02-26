let mongoose = require('mongoose');
let keywordSchema = new mongoose.Schema({
        words: Array, 
    })
let keywordModel = mongoose.model('keywords', keywordSchema);
module.exports = keywordModel;