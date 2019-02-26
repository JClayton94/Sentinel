const PDFParser = require("pdf2json");
const fs = require("fs");

let dir = JSON.parse(fs.readFileSync("./directoryConfig.json", "utf8"));
let dirFiles = fs.readdirSync(dir.pdfDir);
let dirLength = dirFiles.length;
let pdf;

for(let i = 0; i < dirLength; i++){

    pdf  = new PDFParser();
    pdf.on("pdfParser_dataError", errData => console.error(errData.parserError));
    pdf.on("pdfParser_dataReady", pdfData => {
            
            fs.writeFile(dir.jsonDir + "documentJSON_" + i +  ".json", JSON.stringify(pdfData), err => {
                if (err) throw err;
            });
        }); 
        
    pdf.loadPDF(dir.pdfDir + dirFiles[i]);
}
