//npm package bundle comes along with node
//npm --v


//local dependency
//npm i <packageName>

//global dependency
//npm install -g <packageName>
//sudo npm install -g <packageName> for (mac)

//package.json -manifest file
//manual approach created in root and enter properties
//npm init (step by step process)
//npm init -y(everything default)

const what=require('lodash');

const items=[1,[2,[3,[4]]]]
const newitems=what.flattenDeep(items);
console.log(newitems);
