var concat = require('concat-stream');

process.stdin.pipe(concat(function(data) {
	var reverse = data.toString().split("").reverse().join("");
	console.log(reverse);
})).pipe(process.stdout);