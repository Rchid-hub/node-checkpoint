const fs= require('fs');

bf=fs.readFileSync(process.argv[2])

let str=bf.toString();

console.log(str.split('\n').length-1)