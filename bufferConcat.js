var buffer1=new Buffer('ndoe.js学习教程');
var buffer2=new Buffer('www.baidu.com');
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log('Buffer3的内容：'+buffer3.toString());
