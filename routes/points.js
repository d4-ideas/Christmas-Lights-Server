var express = require('express');
var router = express.Router();
var points = require('../collections/points.js');

/* GET home page. */
//This will return a list of points (xample json from above)within a given a rectangle (N,S,E,W) 
router.get('/points', function(req, res, next) {
    points.getPoints(undefined, function(err, data){  
          res.json(data);
    });
});

//Post a single point with up/down vote
//lat : latitude
//long : longitude
//vote : up or down
//id : uniqid for de

router.post('/points', function(req, res, next) {
    console.log('start post to /points');
    var point = {coordinates: [parseFloat(req.body.lon),parseFloat(req.body.lat)],
                device:{type: req.body.device.type, id: req.body.device.id}}

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
