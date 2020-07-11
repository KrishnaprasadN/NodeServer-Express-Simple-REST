const express = require("express");
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');


const hostname = "localhost";
const port = "3000";

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json())

app.all('/dishes', (req, res, next) => {
    res.status = 200;
    res.setHeader("Content-Type", "text/plain");
    
    next();
})

app.get('/dishes', (req, res, next) => {
    res.end('All the dishes are returned to client')    
  
})

app.post('/dishes', (req, res, next) => {
    res.end('Posting dishes to server - ' + req.body.name +
    ' with details: ' + req.body.des)    
})

app.put('/dishes', (req, res, next) => {
    res.status = 403
    res.end('Operation not supported on Dishes')    
})

app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the Dishes')    
})


app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send the detail of the dish - ' + req.params.dishId)
})

app.post('/dishes/:dishId', (req, res, next) => {
    res.status = 403
    res.end('Operation not supported on Dish - ' + req.params.dishId) 
})

app.put('/dishes/:dishId', (req, res, next) => {
    res.end('Updating the Dish - ' +  req.params.dishId)      
})

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting the Dish - ' +  req.params.dishId) 
})

// server static file from public folder
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.status = 200;
    res.setHeader("Content-Type", "text/html");
    res.end('<html><body><h1> Express server, Good to see you </h1></body></html>');

});

const server = http.createServer(app);
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})