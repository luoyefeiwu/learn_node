var config=require('../config/default');
var mongoose = require('mongoose');
mongoose.connect(config.mongodb);

var User = mongoose.model('User', {
  name: { type: 'string' },
  password: { type: 'string' },
  avatar: { type: 'string' },
  gender: { type: 'string', enum: ['m', 'f', 'x'] },
  bio: { type: 'string' }
});


module.exports={
    Find:function(data,callback){
        return User.find(data).exec(callback);
    },
    Find1:function(data){
        return User.find(data).exec();
    },
    Insert:function(data,callback){
        return User.create(data,callback);
    },
    Update:function(where,update,callback){
        User.update(where,update,callback).exec();
    },
    Delete:function(where,callback){
        User.remove(where,callback).exec();
    }

}