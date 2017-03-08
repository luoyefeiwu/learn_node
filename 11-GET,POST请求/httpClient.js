var http=require('http');
var querystring=require('querystring');

//发送post 请求
var postData=querystring.stringify({userId:'0e9bf0ea-0ebf-4e59-abce-9d85d712a12d'});

var options={  
   hostname:'localhost',  
   port:54235,  
   path:'/home/index',  
   method:'POST',  
   header:{  
    //'Content-Type':'application/x-www-form-urlencoded',  
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',  
    'Content-Length':Buffer.byteLength(postData)  
   }  
}  
var req=http.request(options, function(res) {  
    console.log('Status:',res.statusCode);  
    console.log('headers:',JSON.stringify(res.headers));  
    res.setEncoding('utf-8');  
    res.on('data',function(chun){  
        console.log('body分隔线---------------------------------\r\n');  
        console.info(chun);  
    });  
    res.on('end',function(){  
        console.log('No more data in response.********');  
    });  
});  
req.on('error',function(err){  
    console.error(err);  
});  
req.write(postData);  
req.end();  