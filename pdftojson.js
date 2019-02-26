const PDFParser = require("pdf2json");
const fs = require("fs");

let dir = JSON.parse(fs.readFileSync("./directoryConfig.json", "utf8"));
let dirLength = fs.readdirSync(dir.pdfDir).length;
let pdf;

console.log(dirLength);
console.log(dir.jsonDir);
console.log(dir.pdfDir);

for(let i = 1; i < dirLength + 1; i++){
    
    pdf  = new PDFParser();
    pdf.on("pdfParser_dataError", errData => console.error(errData.parserError));
    pdf.on("pdfParser_dataReady", pdfData => {
            fs.writeFile(dir.jsonDir + i +  ".json", JSON.stringify(pdfData), err => {
                if (err) throw err;
            });
        }); 
        
    pdf.loadPDF(dir.pdfDir + "test" + i + ".pdf");
}
