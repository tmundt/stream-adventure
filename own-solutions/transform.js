var through = require('through');
var throughStream = through(write, end);
process.stdin.pipe(throughStream).pipe(process.stdout);

throughStream.end();

function write(buffer) {
	this.queue(buffer).toString().toUpperCase();
	console.log('queue ist: '+this.queue)
}

function end() {
	this.queue(null);
}