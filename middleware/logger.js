const moment = require('moment');

// create middleware, always call next so that can move to next middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`); // everytime we make a request, can see Hello in the console
    next();
}

module.exports = logger;