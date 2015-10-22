var expect = require("chai").expect;
var pointsC = require('../collections/points.js');

before(function(done){
    done();
});

describe('pointsCollection', function() {
    describe('addPoint', function() {
        it('should add the point', function(done){   
            var point = {coordinates: [-105.01621,39.57422],
                        device:{type:'Android', id:'123'}}
            pointsC.addPoint(point, function(err, data){
                try{
                    console.log(err);
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
