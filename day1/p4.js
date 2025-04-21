const fs = require('fs');


const read = () => {
     fs.readFile('./data.txt', 'utf-8' , (err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        
    }
 })
}
console.log("I am before reading");
read();
console.log("I am after reading");

