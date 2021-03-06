var express=require('express');
var app=express();

//主页输出 “hello world”
app.get('/',function(req,res){
	console.log("主页GET请求");
	res.send("Hello GET");
})

//POST 请求
app.post('/',function(req,res){
	console.log("主页POST请求");
	res.send('Hello POST');
})

// del_user 页面响应
app.get('/del_user',function(req,res){
	console.log("/del_user 响应 DELETE请求");
	res.send('删除页面');
})

// lits_user页面GET请求
app.get('/list_user',function(req,res){
	console.log('/list_user GET请求');
	console.send('用户列表页面');
})

//对页面 abcd, abxcd,ad123cd,等响应 get请求
app.get('/ab*cd',function(req,res){
	console.log('/ab*cd GET请求');
	res.send('正则匹配');
})

var server=app.listen(8081,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为http://%s:%s",host,port);
})

