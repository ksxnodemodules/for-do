
((module) => {
	'use strict';

	var For = require('x-iterable/create-class').fromGenerator(count);

	For = class extends For {
		constructor(times) {
			super(times);
			this.do = (fn) => this.forEach(fn);
		}
	};

	module.exports = {
		For: For,
		for: (times) => new For(times)
	}

	function * count(times) {
		for ( ; times; --times) {
			yield times;
		}
	}

})(module);
