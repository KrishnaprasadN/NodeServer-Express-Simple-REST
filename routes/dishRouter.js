const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.route('/')
.all((req, res, next) => {
    res.status = 200;
    res.setHeader("Content-Type", "text/plain");
    
    next();
})
.get((req, res, next) => {
    res.end('All the dishes are returned to client FROM DISH ROUTER')    
  
})
.post((req, res, next) => {
    res.end('Posting dishes to server - ' + req.body.name +
    ' with details: ' + req.body.des)    
})
.put((req, res, next) => {
    res.status = 403
    res.end('Operation not supported on Dishes')    
})
.delete((req, res, next) => {
    res.end('Deleting all the Dishes')    
});

module.exports = dishRouter;