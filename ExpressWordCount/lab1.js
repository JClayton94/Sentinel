const fileSys = require('fs');
const _ = require('lodash');
const assessedDocImport = fileSys.readFileSync('./jsons/content2.json', 'utf8');
const keywordsImport = fileSys.readFileSync('keywords.json', 'utf8');
const assessedDoc = JSON.parse(assessedDocImport);
const assessedPages = assessedDoc.formImage.Pages;
const assessedTexts = assessedDoc.formImage.Pages[0].Texts;
const keywordList = JSON.parse(keywordsImport);
const keywordCount = [];
const extractedText = [];

for (let text in assessedPages) {
    let tempHold = assessedPages[text].Texts;
    for (let word in tempHold) {
      // console.log(tempHold[word].R[0].T);
      let temp = tempHold[word].R[0].T.replace(new RegExp("%E2%80%99", "g"), "'")
      .replace(new RegExp("%2C", "g"), " ")
      .replace(new RegExp("%3A", "g"), ":")
      .replace(/"%2F"/g, "/").split("%20");
      for (var caught in temp) {
        extractedText.push(temp[caught]);
      }
    }
}

for (let targetWord in keywordList.keywords) {
  let counter = 0;
  for (let caughtWord in extractedText) {
    if (extractedText[caughtWord] == keywordList.keywords[targetWord]) {
      counter++;
    }
  }
  let tempObject = { word: keywordList.keywords[targetWord], count: counter };
  keywordCount.push(tempObject);
}

console.log(keywordCount);

fileSys.writeFile('extractedWords3.txt', extractedText, function (err) {
  if (err) throw err;
  // console.log("done");
});

// console.log(extractedText);
