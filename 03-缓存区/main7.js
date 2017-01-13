var buffer1=new Buffer('百度官方');
var buffer2=new Buffer('www.baidu.com');
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log('Buffer2的内容:'+buffer3.toString());
