var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/rereddit');

var routes = require('./routes/index');
var users = require('./routes/users');*/

var app = express();

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));*/

app.use(express.static('public'));
app.use(express.static('node_modules'));

/*app.use('/', routes);
app.use('/users', users);*/

app.get('/products', function(req, res, next){
	console.log('already cross');
	res.json([
		{
			brand: 'zoeva',
			name: 'brush',
			price: 25,
			likes: 0,
			image:'url',
			productType: 'something'
		},
		{
			brand: 'artdeco',
			name: 'Eyeshadow Blending Brush',
			price: 17,
			likes: 0,
			image:'url',
			productType: 'something'
		},
		{
			brand: 'japoneske',
			name: 'concealer',
			price: 9.40,
			likes: 0,
			image:'url',
			productType: 'something'
		}
	]);
});

var port = process.env.PORT || '4001';

app.listen(port, function() {
	console.log('server is up');
});