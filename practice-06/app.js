const express = require('express');
const Constants = require('./utils/constants');
const morgan = require('morgan');
const serveIndex = require('serve-index');
const cors = require('cors');

const userController = require('./controllers/studentController');


const fs = require('fs');
let logFileStream = fs.createWriteStream(Constants.LOG_FILE_PATH, { flags: 'a' });

const app = express();

//log
app.use(morgan('dev', {stream: logFileStream}));
app.use(express.json()); //convert payload to json, then we can use req.body as a json object
app.use('/pictures', serveIndex('./assets/pics', {icon: true}));
app.use(cors()); //accept all cors


app.use('/students', userController.router)

app.use(function(err, req, res, next) {
    res.status(404).json(err);
});


app.listen(Constants.PORT, () => console.log(`Serevr is started at ${Constants.PORT}`));
