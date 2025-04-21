const fs = require('fs');

/* fs.mkdir("mydir", (err) => {
    err ? console.log(err) : console.log("created")
})   */
 
 const data = " new directory";

 /* fs.writeFile("./mydir/data.txt", data , (err)=>{
    err ? console.log(err) : console.log("data written created");
 }) */

fs.rmdir("./mydir",  (err)=>{
    err ? console.log(err) : console.log("file delete");
 })