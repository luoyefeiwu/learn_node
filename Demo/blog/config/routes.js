module.exports=function(app){
    console.log('进入我们路由的配置文件');
    app.get('/',function(req,res,next){
      res.render('index',{title:'Express'});
    });

    app.get('/login',function(req,res,next){
        res.send('登录');
    });

    app.get('/reg',function(req,res,next){
        res.send('注册');
    })

    app.get('/logout',function(req,res,next){
        res.send('登出');
    })
}