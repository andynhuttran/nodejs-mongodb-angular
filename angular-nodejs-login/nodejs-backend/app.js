const express = require('express');
const auth  = require('./auth/auth');
const authenticate = express('./utils/authenticate');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', auth.router);

//app.use('/api', authenticate.router);

app.listen(3000, () => console.log("Listening in port 3000"));