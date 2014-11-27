var split = require('split');
var through = require('through');
var throughStream = through(write, end);

process.stdin.pipe(split()).pipe(throughStream).pipe(process.stdout);
var counter = 0;

// process.stdin.pipe(split()).pipe(through(function(line){
// 	counter += 1;
// 	var output = line.toString();
// 	if (counter % 2 == 0) {
// 		// is even
// 		output = output.toUpperCase();
// 	} else {
// 		output = output.toLowerCase();
// 	}
// 	console.log('line ist: '+ output);
// 	//console.dir(line.toString());
// }));

// Write buffer to stream
function write(buffer) {
	counter += 1;

	var stringData = buffer.toString();
	if (counter % 2 == 0) {
		// is even
		stringData = stringData.toUpperCase();
	} else {
		stringData = stringData.toLowerCase();
	}
	stringData += "\n";
	this.queue(stringData);
}

// end stream/throughStream
function end() {
	this.queue(null);
	throughStream.end();
}
