const moment = require('moment');

function getCurrentTime(){
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}

module.exports = { getCurrentTime };
