var http=require('http');
var url=require('url');
var server=http.createServer(function(req,res){
	//由于写了true，那个就是一个对象
	var obj=url.parse(req.url,true).query;
	var name=obj.name;
	var age=obj.age;
	var sex=obj.sex;
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
	res.end("服务器收到了表单的请求"+name+age+sex);

})
server.listen(3000);
