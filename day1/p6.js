const fs  = require('fs');

const data = " I am append function";

fs.appendFile("./data.txt", data, (err) => {
    err ? console.log(err) : console.log("update")
})