let express = require('express');

let app = express();

let rout = express.Router();

let path = require('path');

let bodyParser = require('body-parser');

require('.NewFolder/db')
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/NewFolder'));

app.set('NewFolder', path.join(__dirname + '/NewFolder'));

app.use(bodyParser.urlencoded({
    extended: true
}));

let userRoute = require('./NewFolder');


app.use('/', userRoute);
app.use('/student registration form', userRoute);

app.use('/add-student', userRoute);

app.use('/update/:_id', userRoute);

app.use('/delete/:_id', userRoute);




let http = require('http').Server(app);


// Listen application request on port 3000
http.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});
