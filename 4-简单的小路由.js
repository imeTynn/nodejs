const http=require('http');
var server=http.createServer(function(req,res){
	//得到url
	var userurl=req.url;
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    //substr函数来判断此时的开头
    if(userurl.substr(0,9)=="/student/"){
    	var studentid=userurl.substr(9);
    	if(/^\d{10}$/.test(studentid)){
    		res.end('你要查询的id为'+studentid);
    	}else{
    		res.end('学号不符合');
    	}
    }else if(userurl.substr(0,9)=="/teacher/"){
    	var teacherid=userurl.substr(9);
    	if(/^\d{6}$/.test(teacherid)){
    		res.end('你要查询的id为'+teacherid);
    	}else{
    		res.end('学位号不正确');
    	}
    }
   });
server.listen(3000);
