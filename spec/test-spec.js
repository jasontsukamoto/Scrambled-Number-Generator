var chai = require('chai');
var should = chai.should();

var scrambled = require('../js/./challenge-solution.js');

describe('This is scrambled num generator', function () {

  it('should be a function', function () {
    scrambled.generate.should.be.a('function');
  });

  it('should return false if parameter is not a number', function () {
   scrambled.generate({}).should.be.equal(false);
   scrambled.generate([]).should.be.equal(false);
   scrambled.generate('string').should.be.equal(false);
  });

  it('should return an array', function () {
    scrambled.generate(5).should.be.an('array');
  });

  it('should have a length equal to number', function () {
    scrambled.generate(1000).length.should.be.equal(1000);
  });


});