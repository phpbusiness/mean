var express = require("express");

var app = express();

// set up handlebars view engine
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
	//res.type('text/plain');
	//res.send('Meadowlark Travel');
	res.render('home');
});
app.get('/about', function(req, res){
	res.render('about');
});



app.use(express.static(__dirname + '/public'));

// custom 404 page
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});	

// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});


app.listen(app.get('port'),function(){

	console.log(__dirname+ "express js started" +
	app.get('port') + '; ctrl+c to exit;')
});
