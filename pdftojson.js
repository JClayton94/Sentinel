const PDFPARSER = require("pdf2json");
const FS = require("fs");
PDFConverter();

function PDFConverter() {
  let dir = JSON.parse(FS.readFileSync("./PDFConvertConfig.json", "utf8"));
  let dirFiles = FS.readdirSync(dir.pdfDir);
  let dirLength = dirFiles.length;
  let jsonDocName = dir.jsonRaw;
  var jsonDocArray = [];
  let pdf;

  for (let i = 0; i < dirLength; i++) {
    pdf = new PDFPARSER();
    pdf.on("pdfParser_dataError", errData => console.error("error" + errData.parserError));
    pdf.on("pdfParser_dataReady", pdfData => {
    FS.writeFile(dir.jsonDir + jsonDocName + i + ".json", JSON.stringify(pdfData), err => {
    jsonDocArray.push(jsonDocName + i + ".json");
    if (err) throw err;
    });
    });
    pdf.loadPDF(dir.pdfDir + dirFiles[i]);
  }
}

module.exports = PDFConverter;