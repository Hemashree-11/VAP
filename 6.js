const http = require("http");

const server = http.createServer((req,res) => {
    res.writeHead(200,{ "Content-Tyoe": "application/json"});


    const data = {
        name: "student",
        usn: "1AY24CDOXX"
};

    res.end(JSON.stringify(data));
});

server.listen(4000);