const names=require('./4-names');
const sayHi=require('./5-utils');
const data=require('./6-alternative-module');


console.log(data);
require('./7-mind-grenade');
//console.log(names);
//console.log(names);

sayHi('vamshi');
sayHi(names.peter);
sayHi(names.john);
