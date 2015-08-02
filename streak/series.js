var streak = require('./streak');
var async = require('async');
var starttime = new Date().getTime();

async.series({
	gpedro: function (callback) {
		streak('gpedro', callback);
	},

	alvarowolfx: function (callback) {
		streak('alvarowolfx', callback);
	},

	dhyegofernando: function (callback) {
		streak('dhyegofernando', callback);
	},

	castrolol: function (callback) {
		streak('castrolol', callback);
	}
},
function(err, results){
	console.log(results);
	console.log(new Date().getTime() - starttime);
});