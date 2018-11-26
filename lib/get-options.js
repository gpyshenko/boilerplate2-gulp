const fs = require("fs");
const optionsJson = fs.readFileSync("options.json");
const optionsObject = JSON.parse(optionsJson);

module.exports = optionsObject;