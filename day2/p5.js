const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type': 'text/html'});
    if(req.url === '/home'){
        res.end('<h1>HOME PAGE  </h1>');
    }
    else if(req.url === '/about'){
        res.end('<h1>About PAGE  </h1>');
    }
     else if(req.url === '/about'){
        res.end('<h1>About PAGE  </h1>');
    }
     else if(req.url === '/contact'){
        res.end('<h1>contact PAGE  </h1>');
    }
     else {
        res.end('<h1> 404! page not found   </h1>');
    }
});

server.listen(9000, () => {
    console.log("server is running on  http://localhost:9000/")
});