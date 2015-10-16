var express = require('express');
var router = express.Router();
var spots = require('../collections/points.js');

/* GET home page. */
//This will return a list of points (xample json from above)within a given a rectangle (N,S,E,W) 
router.get('/points', function(req, res, next) {
    spots.getPoints(undefined, function(err, data){  
          res.json(data);
    });
});

//Post a single point with up/down vote
//lat : latitude
//long : longitude
//vote : up or down
//id : uniqid for de
router.post('/points', function(req, res, next) {
    
});

module.exports = router;
