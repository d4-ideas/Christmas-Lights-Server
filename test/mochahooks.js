console.log('mochahooks');
var mongoose = require('mongoose');

before(function(done){
    // connect to the database
    mongoose.connect('mongodb://localhost/roshambattle');
});


after(function(){

});