var express = require('express');
var router = express.Router();
var spots = require('../collections/points.js');

var example={ "type" : "FeatureCollection",
	"features":[
		{ "type" : "Feature",
		  "geometry" : { "type" : "Point", "coordinates" : [-77.2844568, 38.80313116]},
		  "properties": {"votes" : 100.0}
		},
		{ "type" : "Feature",
		  "geometry" : { "type" : "Point", "coordinates" : [-77.2834568, 38.80323116]},
		  "properties": {"votes" : 60.0}
		},
		{ "type" : "Feature",
		  "geometry" : { "type" : "Point", "coordinates" : [-77.2843578, 38.80312126]},
		  "properties": {"votes" : 30.0}
		}
	]
};

/* GET home page. */
//This will return a list of points (xample json from above)within a given a rectangle (N,S,E,W) 
router.get('/points', function(req, res, next) {
  res.json(example);
});

//Post a single point with up/down vote
router.post('/points', function(req, res, next) {
    
});

module.exports = router;
