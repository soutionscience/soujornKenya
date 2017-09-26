var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');


app.use(express.static('client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var packages = [];
var id = 0;


app.get('/packages', function(req, res){
	res.json(packages)
});

app.get('/packages/:id', function(req, res){
 var package= _.find(packages, {id: req.params.id})

	res.json(package || {});
})

app.post('/packages', function(req, res){

	var package = req.body

	id++
	package.id =id +'';

	packages.push(package);



	res.json(packages)


});

app.put('/packages/:id', function(req, res){
	var update = req.body;
	if(update.id){
		delete update.id
	}
	var package = _.findIndex(packages, { id: req.params.id})
	if(!packages[package])
		res.send();
	else
	{
		var updatePackage = _.assign(packages[package], update);

		res.json(updatePackage)
	}
})

app.delete('packages/:id', function(req, res){

	var package =_.findIndex(packages, {id: req.params.id});
	if(!packages[package]){
		res.send();
	}
	else{
		packages.splice(package, 1)
	}

})

var port = 3002

app.listen(port);
console.log("listening on :" + port)