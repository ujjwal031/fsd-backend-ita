const http = require('http/pr')

const server = http.createServer(async(_, res) => {
res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    const data =await fs.readFile('./index.html','utf-8')
    res.end(data);
})


server.listen(9001, () =>{
    console.log('Server is running on port http://localhost:9001/')
})