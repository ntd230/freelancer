process.env.node_env = 'productioni';
const fs = require('fs');
const fd = process.stdin.fd;
const bSize = 4096;
let buffer = new Buffer(bSize); 
let temp = fs.readSync(fd, buffer, 0, bSize);
let context='';
while(temp){
    context += buffer.toString('utf-8', 0, temp);
    temp  = fs.readSync(fd, buffer, 0, bSize);
}

require('./assets/node.bundle.js');
const ReactServer = global.reactServer;
const MyApp = global.app;
const myJson = JSON.parse(context);
const result = ReactServer.renderToString(MyApp(
    myJson 
));
process.stdout.write('<!--start-->');
const len = result.length;
let last=0;
while(last < len){
    process.stdout.write(result.substr(last,1000));
    last+=1000;
}

