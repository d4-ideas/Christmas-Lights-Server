console.log('mochahooks');
var mongoose = require('mongoose');

before(function(done){
    // connect to the database
    mongoose.connect('mongodb://localhost/spots');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback(){
        done();
    });
});


after(function(){

});