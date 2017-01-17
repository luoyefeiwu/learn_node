function printHello(){
	console.log('Hello World');
}

//2秒以后执行以上函数
var t=setTimeout(printHello,2000);

//清除定时器
clearTimeout(t);
