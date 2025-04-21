const fs = require('fs');   

const data  = "I am  writing to a file";

fs.writeFileSync("./data.txt", data);