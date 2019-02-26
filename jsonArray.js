const fs = require("fs");

let dir = JSON.parse(fs.readFileSync("./directoryConfig.json", "utf8"));
let jsonData = fs.readFileSync("./testJSON.json");
let translatedData = JSON.parse(jsonData);
console.log(translatedData);