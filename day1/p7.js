const fs  = require('fs');

fs.unlink("./data.txt", (err) => {
    err ? console.log(err) : console.log("deleted")
})  