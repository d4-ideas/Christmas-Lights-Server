var express = require('express');
var router = express.Router();

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
router.get('/points', function(req, res, next) {
  res.json(example);
});

module.exports = router;
