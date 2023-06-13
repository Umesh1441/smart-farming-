const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
// const first = fs.readFileSync('./.html')
const wheather = fs.readFileSync('./wheather.html')
const marketpalce = fs.readFileSync('./marketpalce.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    url=req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
   
    if(url=='/'){
        res.end(first);
    }
    else if(url=='/wheather'){
        res.end(wheather);
    }
    else if(url=='/marketpalce'){
        res.end(marketpalce);
    }
    else{
        res.end("<h1> fuck off error</h1>")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});