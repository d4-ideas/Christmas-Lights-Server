var express = require('express');
var router = express.Router();
var points = require('../collections/points.js');

/* GET home page. */
//This will return a list of points (example json below)within a given a rectangle (N,S,E,W) 
//var example={ "type" : "FeatureCollection",
//	"features":[
//		{ "type" : "Feature",
//		  "geometry" : { "type" : "Point", "coordinates" : [-77.2844568, 38.80313116]},
//		  "properties": {"votes" : 100.0}
//		},
//		{ "type" : "Feature",
//		  "geometry" : { "type" : "Point", "coordinates" : [-77.2834568, 38.80323116]},
//		  "properties": {"votes" : 60.0}
//		},
//		{ "type" : "Feature",
//		  "geometry" : { "type" : "Point", "coordinates" : [-77.2843578, 38.80312126]},
//		  "properties": {"votes" : 30.0}
//		}
//	]
//};
//************************************************************************************************************
// function     : get
// arguments    : data  {
//                          "geometry": {
//                              "type": "Polygon",
//                              "coordinates": [[ series of points/coordinates forming a polygon beginning and ending with the same point ]]
//                          }
//                      },
//                callback function (error, [points])
//************************************************************************************************************
router.get('/points', function(req, res, next) {
    console.log("view: ");
    console.log(req.query.p);
    if (req.query.p){
        var coor = req.query.p.map(function(curr){
                                       return  curr.map(function(curr){
                                            return parseFloat(curr);    
                                       });
                                    });
        var polygon = {"geometry": {
                            "type": "Polygon",
                            "coordinates": [coor]
                        }
                      };
        console.log(polygon);
        points.getPoints(polygon, function(err, data){
            if (err) {
                console.log(err);
                res.json({"error": err});
            } else {
                var features = data.map(function(curr){
                                            var feature = {"type": 'Feature',
                                                           "geometry": curr.geometry,
                                                           "properties": {"votes": 1}
                                                          }
                                            return feature;
                                        });
                    
                res.json({"type": 'FeatureCollection', "features": features});
            }
        });
    } else {
        res.json({"errror": 'no geometry supplied'});
    }
});

//Post a single point with up/down vote
//lat : latitude
//lon : longitude
//vote : up or down
//id : uniqid for device
//type : android or iOS

router.post('/points', function(req, res, next) {
    console.log('start post to /points');
    var point = {coordinates: [parseFloat(req.body.lon),parseFloat(req.body.lat)],
                device:{type: req.body.type, id: req.body.id}}

    points.addPoint(point, function(err, data){
        if (err){
            console.log(err);
            res.json(err);
        } else {
            res.json('ok');
        }
    });
});

module.exports = router;
