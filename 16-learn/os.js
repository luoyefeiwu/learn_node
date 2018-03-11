const os = require('os');
console.log('主机名:'+os.hostname());
console.log('剩余内存:'+(os.freemem()/1024/1024)+'/M');
console.log('内存:'+(os.totalmem()/1024/1024)+'/M');
console.log('CPU使用状况:'+os.loadavg());
console.log('计算机正常运行时间:'+Math.floor(os.uptime())/3600);