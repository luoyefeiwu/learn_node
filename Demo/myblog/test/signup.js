var path=require('path');
var assert=require('assert');
var request=require('supertest');
var app=require('../index');
var User=require('../lib/mongo').User;

var testName1='testName1';
var testName2='testName2';
describ('singnup',function(){
  describ('POST/singnup',function(){
    var agent=require.agent(app);
    beforeEach(function(done){
      //创建一个用户
      
    })
  })
})
