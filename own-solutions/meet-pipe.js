var fs = require('fs');
var file = process.argv[2];
//console.log(file);
fs.createReadStream(file).pipe(process.stdout);
