var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
	
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
	fs.readFile('./text,txt',function(err,data){
		if(err) throw err;
		//这里的data是buffer对象，需要转化为字符串
		res.end(data.toString());
	})
});
server.listen(3000);
