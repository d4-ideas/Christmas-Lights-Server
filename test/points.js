var expect = require("chai").expect;
var pointsC = require('../collections/points.js');

before(function(done){
    done();
});

describe('pointsCollection', function() {
    describe('addPoint', function() {
        it('should add the point', function(done){   
            var point = {coordinates: [-75,39.57422],
                        device:{type:'Android', 
                                id:'123'}
                        }
            pointsC.addPoint(point, function(err, data){
                try{
                    console.log(data);
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
            var polygon = {
                            "geometry": {
                            "type": "Polygon",
                            "coordinates": [[
                                [-70, 35],
                                [-70,  40],
                                [-82,  40],
                                [-82, 35],
                                [-70, 35]
                            ]]
                            }
                        };
            pointsC.getPoints(polygon, function(err, data){
                try{
                    console.log(data);
                    expect(err).to.be.undefined;
                    expect(data).to.be.ok;
                    done();
                } catch(e){
                    done(e);
                }
            });
        });
    });
});
