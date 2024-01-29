const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require ('./middleware/logger');
const members = require('./Members')

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

// set static folder
app.use(express.static(path.join(__dirname, 'public'))); 

// members api route
app.use('/api/members', require('./routes/api/members'))


// app.get('/', (req, res) => {
//  res.send('<h1>Hello World!!</h1>');
//  res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running... on port ${PORT}`)
});