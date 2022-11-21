const express = require('express');
const cors = require('cors')
const server = express();
const http = require('http');

server.use(cors());

const DB = {
    comments: [
        {name: "Jonny", comment: "A great product!"},
        {name: "Jessica", comment: "Not really!"},
    ]
};

server.get('/', function (req, res) {
  res.send('Hello World');
});

server.get('/comments', function (req, res) {
    res.status = 200;
    res.json(DB.comments);
});


http.createServer(server).listen(3000, ()=> {
    console.log("Server is working and running on http://localhost:3000");
});