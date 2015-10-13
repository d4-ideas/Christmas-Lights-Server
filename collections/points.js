var mongoose = require('mongoose');
console.log('loading points collection');

var schema = new mongoose.Schema({
    createdOn: { type: Date, default: Date.now },
    //createdByDevice: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}, 
    geometry: { type: { type: String, default:'Point' }, coordinates: [Number] }
});

var model = mongoose.model('point', schema);
exports.schema = schema;
exports.model = model;

//var point = {geometry: 
//             {type: 'Point',
//                coordinates: [-105.01621,39.57422]
//             }};
//model.create(point).then(function(pnt){
//    console.log('added:'+pnt);
//});

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

exports.getPoints = function(data, callback){
    console.log('start getPoints');   
    if (data){
        callback(undefined, example);   
    } else {
        callback({error:'need some data dude'}, undefined);   
    }
}

exports.addPoint = function(data, callback){
    console.log('start addPoint');   
    if (data){
        callback(undefined, example);   
    } else {
        callback({error:'need some data dude'}, undefined);   
    }
}