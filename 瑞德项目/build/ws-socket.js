module.exports=function(server){
	let socket=require("socket.io");
	let io=socket(server);
	
	io.on("connection",function(ws){//io指的是对所有网页的发送数据
		ws.on("chat",function(data){
			io.emit("allChat",data)
		});
	});
}