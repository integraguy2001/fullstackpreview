const express = require('express');
const cors = require('cors')
const server = express();
const http = require('http');
const bodyParser = require('body-parser')


server.use(cors());
server.use(bodyParser());

const DB = {
    "111111": [  ],
    "222222": []
};

/**
 * Backend-fronend communication using REST API
 * GET, POST, DELETE, UPDATE
 */
server.get('/', function (req, res) {
  res.send('Hello World');
});


server.get('/comments/:id', function (req, res) {
    const id = req.params.id;

    const comments = DB[id] ? DB[id] : [];
    
    res.status = 200;
    res.json(comments);
});

server.post('/comments', function (req, res) {
    const { id, name, comment } = req.body
    if(DB[id] === undefined) {
        DB[id] = [];
    }
    DB[id].push({ name, comment });
    res.status(200);
    res.json({ name, comment });
});


http.createServer(server).listen(3000, ()=> {
    console.log("Server is working and running on http://localhost:3000");
});