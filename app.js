var config = require('./config'),
    express = require('express'),
    app = module.exports = express(),
    hbs = require('express-handlebars');

app.engine('.hbs', hbs( {
    defaultLayout: 'main',
    extname: ".hbs"
  })
);
app.set('view engine', '.hbs');

app.locals = config.viewDefaults;
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});

var port = process.env.PORT || 3000;
var server = app.listen(port)
