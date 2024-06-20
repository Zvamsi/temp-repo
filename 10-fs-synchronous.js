const {readFileSync,writeFileSync}=require('node:fs');
//accessing file objects directly which is equal to
// const file=require('node:fs');
// file.readFileSync
console.log('start');
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt',`combines ${first} and ${second}`,{flag:'a'});
console.log('done');
console.log('started new one !!')