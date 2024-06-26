const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(_dirname + '/public/index.html');
});


app.get('/about', (req, res) => {
    res.sendFile(_dirname + '/public/about.html');
});