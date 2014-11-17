var fs = require('fs');
// fs.createReadStream(process.stdin).pipe(process.stdout);
// fs.pipe().process.stdin.pipe();
// process.stdin.pipe(process.stdout.pipe());
//console.log(process.stdin);
process.stdin.pipe(process.stdout);