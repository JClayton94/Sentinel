const fs = require('fs')
const PrexView = require('prexview')
 
const pxv = new Prexview();
 
const options = {
  template: 'supported_languages',
  output: 'pdf'
}
 
// this can also be a valid string.
const json = "./test/content.json";
 
const file = './test/testToPdf.pdf';
 
pxv.sendXML(xml, options)
  .then((res) => {
    fs.writeFileSync(file, res.file)
 
    console.log(`File created: ${file}`)
  }).catch((err) => {
    console.log(e.message)
  })