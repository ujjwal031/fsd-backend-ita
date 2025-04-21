 const fs  = require('fs');

 const data = "I am writing to a file using aschronous method";

 fs.writeFile("./data.txt", data , (err) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log("data written successfully");
    }
 });