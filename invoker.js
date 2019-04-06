var factory = require('./factory.js');

factory = new factory('Triangle');
var res = factory.get('area',{'height':10,'base':5});
console.log(res);