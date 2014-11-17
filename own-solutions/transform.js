var through = require('through');
var throughStream = through(write, end);
process.stdin.pipe(throughStream).pipe(process.stdout);

//throughStream.end();

function write(buffer) {
	var stringData = buffer.toString().toUpperCase();
	//console.log("function write(), stringData ist: " + stringData);
	this.queue(stringData);
}

function end() {
	this.queue(null);
	throughStream.end();
}

//throughStream.end();