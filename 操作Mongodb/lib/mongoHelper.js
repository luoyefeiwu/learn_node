var MongoClient=require('mongodb').MongoClient;
var config=require('../config/default');

module.exports={
    Delete:function Delete(){
       MongoClient.connect(config.mongodb,function(err,db){
            db.collection("user").remove({name:"王五",passworld:"12315",gender:"m",bio:"123",avatar:"123"});
            db.close();
         });
    },
    Insert:function Insert(){
         MongoClient.connect(config.mongodb,function(err,db){
            db.collection("user").insert({name:"王五",passworld:"12315",gender:"m",bio:"123",avatar:"123"});
            db.close();
         });

    },
    Update:function Update(){
         MongoClient.connect(config.mongodb,function(err,db){
            db.collection("user").updateOne({name:"王五修改后"},{$set:{name:"王五修改后"}});
            db.close();
         });
    },
    Find:function Find(){
        MongoClient.connect(config.mongodb,function(error,db){
         db.collection("users").find({}).toArray(function(err,docs){
             console.log(docs);
             db.close();
       })
          
        });
    }
}