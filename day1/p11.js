const fs = require("fs/promises");
const write = async() =>{
    const data = " new data";
    fs.writeFile("./data.txt", data, (err)=>{
        err ? console.log(err) : console.log("data written");
    }   )

}
write();