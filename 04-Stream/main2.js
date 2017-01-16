var fs=require('fs');
var data='百度官网地址:www.baidu.com';

//创建一个可以写入的流,写入到文件 output.txt中
var writeStream=fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writeStream.write(data,'UTF8');

//标记文件末尾
writeStream.end();

//处理流事件--》data,end,and error
writeStream.on('finish',function(){
	console.log('写入成功');
});

writeStream.on('error',function(err){
	console.log(err.stack);
});

console.log('程序执行完毕');
