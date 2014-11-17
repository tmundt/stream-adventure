var through = require('through');
var throughStream = through(write, end);
process.stdin.pipe(throughStream).pipe(process.stdout);

//throughStream.end();

function write(buffer) {
<<<<<<< HEAD
	var stringData = buffer.toString().toUpperCase();
	//console.log("function write(), stringData ist: " + stringData);
	this.queue(stringData);
=======
	this.queue(buffer).toString().toUpperCase();
	console.log('queue ist: '+this.queue);
>>>>>>> 3eb306f9a4e5fac266c7c57ebfff8c85108fe543
}

function end() {
	this.queue(null);
	throughStream.end();
}

//throughStream.end();
