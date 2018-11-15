'use strict';

var expect = require('chai').expect;
var hivTester = require('../index');
var number = 10;

describe('#hivTester', function() {
    it('should accept a number', function() {
        var result = hivTester.setHivNumber(number);
        expect(result).to.equal(number);
    });
	
    it('should decrement with 1', function() {
        var result = hivTester.getHivNumber();
        expect(result).to.equal(9);
    });
	
    it('should decrement with 1', function() {
        var result = hivTester.getHivNumber();
        expect(result).to.equal(8);
    });
});