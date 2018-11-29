var http=require('http');
var url=require('url');
var server=http.createServer(function(req,res){
	console.log(req.url);
	//把完整的路径拆分,拿到查询字符串 host,port ,pathname,path
	//url.parse()如果第二个参数是true，那么就可以将所有的查询变为对象
	//就可以.的到参数
	var path=url.parse(req.url,true).query;
	console.log(path);
	res.end('success');
});
server.listen(3000,"127.0.0.1");
