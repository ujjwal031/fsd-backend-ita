const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let data = {
        name : "john doe",
        age: 30
    }
    if(req.url === '/getdata' && req.method ==='GET'){
        res.end(JSON.stringify(data));
    }
    else if(req.url === '/setdata' && req.method ==='POST'){
        res.end("data recieved");
    }
});

server.listen(9001, () => {
    console.log("server is running on  http://localhost:9001/")
});