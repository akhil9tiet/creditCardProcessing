var fs = require('fs'),
	filename = process.argv[2];

var data = fs.readFileSync(filename, 'utf8').split('\n');

exports.data = data;
