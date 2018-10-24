const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const connection = require('./src/db/connection.js');

app.use(express.static('dist/public'));
app.use(express.static('views'))



app.get('/', (req,res) => {
    res.sendFile('index.html');
});

app.get('/api/getJobSkills', (req,res) => {
    connection.query('SELECT * FROM `react_assignment`.`job_details`;', function (error, results, fields) {
        if (error)
            throw error;
        var skills = [];
        results.forEach(result => {
            console.log(result);
            var currentSkills = result.job_skills.toString().split(',');
            currentSkills.forEach(skill => {
                if(skills.indexOf(skill) < 0) {
                    skills.push(skill);
                }
            });
        });
        res.send(results);
    });
    
    //connection.end();
    
});

app.get('api/getResult', (req,res) => {
    console.log('test');
})

app.listen(3000, () => {
    console.log('server is listening on port: 3000');
});

