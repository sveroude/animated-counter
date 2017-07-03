var express = require( 'express' );
var app = express();
var nunjucks = require( 'nunjucks' ) ;

// Define port to run server on
var port = 9000 ;

// Configure Nunjucks
nunjucks.configure('src', {
    autoescape: true,
    express: app,
    watch: true
});

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine('html', nunjucks.render ) ;
app.set('view engine', 'html' ) ;

// Respond to all GET requests by rendering relevant page using Nunjucks
app.get('/', function(req, res) {
    res.render('index.html');
});

// Start server
app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;