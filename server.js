let express = require('express');

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let path = require('path');

let mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/car_dashboard')

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(1235, () => console.log("Listening on port 1235"));
