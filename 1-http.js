//http模块
var http=require('http');
//创建一个服务器，回调函数表示接收到请求之后做的事情
var server=http.createServer(function(req,res){
      //req参数表示请求，res表示响应
      console.log('接收成功'+req.url);
      res.end('请求成功');
      
});
server.listen(3000,'127.0.0.1');
