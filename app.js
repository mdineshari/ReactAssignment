const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(express.static('dist/public'));
app.use(express.static('views'))

app.get('/', (req,res) => {
    res.sendFile('index.html');
});

app.listen(3000, () => {
    console.log('server is listening on port: 3000');
});

