const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const readdata = () =>{
    users = fs.readFileSync('./data.json','utf-8');
}
const writedata = () =>{
    fs.writeFileSync('./data.json',JSON.stringify(users, null ,2));
}
app.get('/api', (req, res) => {
    readdata();
    res.json(users);
});
app.post('/users', (req, res) => {
    const data = req.body;
    readdata();
    const newid = users.length>0?users[users.length-1].id+1:1;
    data.id = newid;
    users.push(data);
    writedata();
    res.json({message: 'data received', data});
});

/* app.post('/users', (req, res) => {
    const data = req.body;
    fs.writeFile('data.json', JSON.stringify(data), (err) =>{
        if(err){
            console.log(err);
        }
        else
        {
            console.log("data saved");
        }
    });
});
 */
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});