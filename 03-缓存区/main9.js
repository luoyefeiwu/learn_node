var buffer1=new Buffer('ABC');
//拷贝一个缓存区
var buffer2=new Buffer('3');
buffer1.copy(buffer2);
console.log("buffer2 content:"+buffer2.toString());
