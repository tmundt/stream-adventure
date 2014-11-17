var through = require('through');
var throughStream = through(write, end);
process.stdin.pipe(throughStream).pipe(process.stdout);

// Write buffer to stream
function write(buffer) {
	var stringData = buffer.toString().toUpperCase();
	this.queue(stringData);
}

// end stream/throughStream
function end() {
	this.queue(null);
	throughStream.end();
}