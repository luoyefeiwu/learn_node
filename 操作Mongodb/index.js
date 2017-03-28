var mongodb = require('./lib/mongoHelper')
var mongoose = require('./lib/mongooseHelper')
console.log( mongodb.Find({name:"李四"}));
mongoose.Find({name:"李四"},function(err,item){
    console.log(item);
})

// mongoose.Insert({name:"王五"},function(error,item){
//     console.log('写入完毕');
// })

// mongoose.Update({name:"王五"},{name:"修改后的王五",function (err,item) {
//     console.log("修改成功");
// }})

mongoose.Delete({name:"王五"},function(err,item){
    console.log("删除成功");
})