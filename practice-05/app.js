const express = require('express');
const userController = require('./controllers/user-controller');

const port = 4000;

const app = new express();
//config
app.set('x-powered-by', false);
app.set('case sensitive routing');


//router
app.get('/users', userController.getUsers);


//start server
app.listen(port, () => console.log(`Server start in port ${port}`));
