var http=require('http');
var querystring=require('querystring');

//发送post 请求
var postData=JSON.stringify({deskid:"ebc90e36-c074-43a5-b403-b861fb9de2e4"});


var options={  
   hostname:'localhost',  
   port:8080,  
   path:'/table/saveDesk1',  
   method:'POST',  
   headers:{  
    'Content-Type':'application/json',  
    //'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',  
    'Content-Length':postData.length
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
