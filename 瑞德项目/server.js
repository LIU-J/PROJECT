let http=require("http");
let express=require("express")
let app=express();
app.use(express.static(__dirname+"/dist"));
let server=http.createServer(app).listen(8080,function(){
	console.log("running")
});

var socket=require("./build/ws-socket");
socket(server);
