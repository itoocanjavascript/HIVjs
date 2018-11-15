'use strict';

var hivNumber = 0;

/*
This should never be used. This is a joke library.
@param {number} number
@return {number}
*/
module.exports.setHivNumber = function(number) {
	hivNumber = number;
	return number;
}

module.exports.getHivNumber = function() {
	return --hivNumber;
}