var util=require('util');

console.log(util.isDate(new Date()));
//true
console.log(Date());
//false (without 'new' returns a String)
console.log(util.isDate({}));
//false
