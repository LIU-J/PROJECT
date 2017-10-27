<template style="height: 100%;">
	<section class="succeed">
	 	<!--<span class="prompt">预约成功！</span>
	 	<router-link class="button" to="/">
	 		<input class="submit" type="submit" value="确定"/>
		 </router-link>-->
		 <label class="name">姓名：<input v-model="name" type="text"/></label>
		<textarea v-model="text" class="text" cols="30" rows="3"></textarea>
		<button @touchstart="buttonTouch" class="button">提交</button>
		<ul  ref="ulList" class="list">
			<li v-for="(item,key) in allData" :key="key" v-html="item.name+'：'+item.text"></li>
		</ul>
 	</section>
</template>

<script>
	import io from "socket.io-client";
	export default {
		name:"reserveSucceed",
		data(){
			return{
				url:"/",
				ws:null,
				name:"",
				text:"",
				allData:[],
			}
		},
		mounted(){
			let _this=this;
			
			_this.ws=io("http://10.66.4.134:8080");
			_this.ws.on("connect",function(){
				console.log(_this.ws.id);
				_this.ws.on("allChat",function(data){//allChat事件自定义；on监听事件；只要后端发送数据即可触发
					_this.allData.push(data);
				});
			});
		},
		methods:{
			buttonTouch(){
				let name=this.name;
				let text=this.text;
				this.ws.emit("chat",{//chat是一个自定义的事件；当前emit发送数据
					name:name,
					text:text
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
.succeed{
	height: 100%;
}
.button{
	display: block;
	width: rem(490px);
	height: rem(75px);
	line-height: rem(75px);
	text-align: center;
	margin: rem(32px) auto rem(20px);
	background: #d5332b;
	border-radius: rem(5px);
	border: 0 none;
	font-size: rem(24px);
	color: #fff;
	input{
		color: #fff;
	}
}
.prompt{
	display: block;
	text-align: center;
	width: rem(507px);
	margin: rem(100px) auto 0;
	padding: rem(15px) rem(30px);
	background: #fff;
	border-radius: rem(5px);
	font-size: rem(30px);
	line-height: rem(32px);
}
.text{
	width: rem(500px);
	line-height: rem(40px);
	font-size: rem(30px);
	margin: rem(20px) rem(50px) 0;
	border: rem(3px) #9C9C9C solid;
	padding: rem(15px);
}
.name{
	display: block;
	margin: rem(40px) rem(50px) 0;
	input,select{
		height: rem(40px);
		width: rem(200px);
		border: rem(1px) solid #9C9C9C;
		border-radius: 0;
		color: #000;
		padding-left: rem(10px);
	}
}
.list{
	width: rem(550px);
	margin: rem(50px) auto rem(20px);
	line-height: rem(40px);
	font-size: rem(25px);
}
</style>
