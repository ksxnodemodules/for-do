
((module) => {
	'use strict';

	var fd = require('for-do');
	var times = 123;

	module.exports = {
		'fd': fd,
		'times': times,
		'test-0': (() => {
			var result = [];
			fd.for(123).do((count) => result.push(count));
			return result;
		})(),
		'test-1': (() =>
			Array.from(fd.for(times))
		)()
	};

})(module);
