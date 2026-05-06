const http = require("http");

const server = http.createServer((req,res) => {
    if (req.url === "/"){
        res.write("home page");
    } else if (req.url === "/about"){
        res.write("About Page");
    } else {
        res.write("page not found");
    }
    res.end();
});

server.listen(3000);