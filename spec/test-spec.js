var chai = require('chai');
var should = chai.should();

var scrambled = require('../js/./challenge-solution.js');

describe('This is scrambled num generator', function () {

  it('should be a function', function () {
    scrambled.generate.should.be.a('function');
  });


  it('should return an array', function () {
    scrambled.generate().should.be.an('array');
  });
});