const express = require('express');
const morgan = require('morgan');
const serveIndex = require('serve-index');

const app = new express();

app.use(morgan('dev'));

app.use('/folders', 
    test, 
    //express.static('./node_modules'),
    serveIndex('node_modules', {'icons': true})
);

function test(req, res, next){
    console.log("Inside test()");
    return next();
}

app.listen(3000, () => console.log("Listening at 3000"));
