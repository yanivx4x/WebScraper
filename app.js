var phantomService = require('./PhantomScriptService');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies


var port = process.env.PORT || 3000;
app.use(express.static('public'));
var indexRouter = require('./src/routes/indexRouter.js')();

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/', indexRouter);



app.listen(port, function () {
    console.log('started on port : ' + port);
});