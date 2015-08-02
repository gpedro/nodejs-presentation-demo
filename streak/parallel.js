var streak = require('./streak');
var async = require('async');
var starttime = new Date().getTime();

async.parallel([
	function (callback) {
		streak('gpedro', callback);
	},

	function (callback) {
		streak('alvarowolfx', callback);
	},

	function (callback) {
		streak('dhyegofernando', callback);
	},

	function (callback) {
		streak('castrolol', callback);
	}
],
function(err, results){
	console.log(results);
	console.log(new Date().getTime() - starttime);
});