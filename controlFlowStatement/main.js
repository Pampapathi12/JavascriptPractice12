const getExportedFunction = require('./module');
console.log(getExportedFunction());

const user = require('./user')
console.log(user);

const Person = require('./person');
const alice = new Person('Alice', 30);
console.log(alice.getInfo());