module.exports=function(app){
    console.log('进入我们路由的配置文件');
    app.get('/',function(req,res,next){
      res.render('index',{title:'Express'});
    });

    app.get('/login',function(req,res,next){
        res.render('login',{title:'登陆'});
    });

    app.get('/reg',function(req,res,next){
        res.render('reg',{title:"注册"})
    });

    app.get('/logout',function(req,res,next){
        res.render('logout',{title:"退出"})
    });
}
