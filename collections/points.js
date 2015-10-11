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