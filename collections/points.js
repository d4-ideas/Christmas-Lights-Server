var mongoose = require('mongoose');
console.log('loading points collection');

var schema = new mongoose.Schema({
    createdOn: { type: Date, default: Date.now },
    createdByDevice: { type: {type: String}, id: {type:String}},
    geometry: { type: { type: String, default:'Point' }, coordinates: [Number] }
});

var model = mongoose.model('point', schema);
exports.schema = schema;
exports.model = model;

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

//************************************************************************************************************
// function     : points.addPoint
// arguments    : data {coordinates: [lon,lat],
//                        device:{type, id}}
//                callback function (error, boolean)
//************************************************************************************************************
exports.addPoint = function(data, callback){
    console.log('start addPoint');  
    var point =   {geometry: {
                    type: 'Point',
                    coordinates: [0,0]},
                   createdByDevice: {
                    type: '',
                    id: ''}
                  };    
    if (data && data.coordinates && data.device && data.device.type && data.device.id){
        point.geometry.coordinates = data.coordinates;
        point.createdByDevice.type = data.device.type;
        point.createdByDevice.id = data.device.id;

        model.create(point, function(err, data){
            if (err){
                console.log('failed to add:'+point);
                callback({error:err}, undefined);
            } else {
                console.log('added:'+point);
                callback(undefined, true);
            }
        });
    } else {
        callback({error:'need some data dude'}, undefined);   
    }
}
