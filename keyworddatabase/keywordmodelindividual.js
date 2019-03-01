
let mongoose = require('mongoose');
let keywordSchema = new mongoose.Schema({
  word: String, 
  })
let keywordModel = mongoose.model('keywords', keywordSchema);
module.exports = keywordModel;