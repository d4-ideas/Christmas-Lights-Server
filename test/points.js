var expect = require("chai").expect;
var pointsC = require('../collections/points.js');

before(function(done){
    done();
});

describe('pointsCollection', function() {
    describe('addPoint', function() {
        it('should add the point', function(done){   
            pointsC.addPoint({lon:-105.01621, lat:39.57422}, function(err, data){
                try{
                    expect(err).to.be.undefined;
                    expect(data).to.be.ok;
                    done();
                } catch(e){
                    done(e);
                }

            });
        });        
    });
    
    describe('getPoints', function(){
        it('should return a geojason of points', function(done){
            //expect(true).to.be.false;
           done();
        });
    });
});
