console.log("File created");
const fs = require("fs");

const data = fs.readFileSync("test.text","utf-8");

console.log(data);