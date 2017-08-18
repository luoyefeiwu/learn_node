/*
用户信息数据库
*/
var mongodb = require('./db');
var connect = require('./connect');
var async = require('async');

module.exports = User;

function User(user) {
    this.name = user.name;
    this.password = user.password;
    this.info = user.info;
    this.stock = user.stock;
    this.watch = user.watch;
    this.bewatch = user.bewatch;
    this.top = user.top;
    this.admin = user.admin;
}


User.prototype.save=function(callback){ 
  //callback 是执行玩保存后的回调函数
  var user = { 
    name: this.name, 
    password: this.password, 
    //下面内容在注册时不用填，在个人首页可以修改，所以先设置默认值和默认头像
    info:this.info||{
                      Spec: "还未填写",
                      interest: "还未填写",
                      pic:{
                        big:"/user/big/images.jpg",
                        small:"user/small/images.jpg"
                      },
                      email:"还未填写"
                    },
    stock:[],
    watch:[],
    beWatch:[],
    top:0,
    admin:this.admin||3 //admin=100是测试数据
  }; 
  //打开数据库
  //连接数据库中的名为user的表，没有就创建
  global.db.collection('user',function(err,collection){ 
    //连接失败会将错误信息返回给回调函数，并且关闭数据库连接
    if(err){ 
      return callback(err); 
    }
    //插入新的数据
    collection.insert(user,{safe: true},function(err,result){        
      //如果错误err有错误信息，将err和user返回给回调函数
      callback(err, user);//成功！返回插入的用户信息 
    }); 
  });
};
//读取用户信息 
User.get = function(name, callback){ 
  //读取 users 集合 
  global.db.collection('user', function(err, collection){ 
    if(err){  
      return callback(err);
    } 
    //查找用户名 name 值为 name文档 
    collection.findOne({name: name},function(err, doc){  
      if(doc){ 
        var user = new User(doc); 
        callback(err, user);//成功！返回查询的用户信息 
      } else { 
        callback(err, null);//失败！返回null 
      } 
    }); 
  });
};
