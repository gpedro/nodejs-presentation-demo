var cheerio = require('cheerio');
var got = require('got');

module.exports = function (username, callback) {

	got('https://github.com/' + username, function (err, data, gres) {
		if (err) {
			callback(err);
			return;
		}

		var $ = cheerio.load(data);
		var $calendar = $('#contributions-calendar > div').get(3);
		var $streak = $($calendar).children('span').get(1);

		callback(false, $($streak).text() || '0 days');
	});

};