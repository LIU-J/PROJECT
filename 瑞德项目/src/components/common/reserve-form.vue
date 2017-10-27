<template>
	<section id="reserve-form">
		 	<reserveframe title="课程试听预约" prompt="免费名额有限，现在就留下您的电话号码，我们的顾问会尽
快联系您，并为您预约一个合适的时间。">
		 		<form class="info" method="post">
		 			<label class="name">宝宝姓名：<input type="text"/></label>
		 			<label class="age">宝宝年龄：<select>
		 				<option></option>
		 			</select>
		 			<select>
		 				<option></option>
		 			</select>
		 			<select>
		 				<option></option>
		 			</select></label>
		 			<label class="tel">联系电话：<input type="text"/></label>
		 			<label class="course">课程选择：<select>
		 				<option>选择你需要试听的课程</option>
		 			</select></label>
		 			<label class="news">最近中心：<select>
		 				<option>选择离你最近的中心</option>
		 			</select></label>
		 			<label class="know">哪里知道：<select>
		 				<option>选择你从哪里知道瑞德启蒙</option>
		 			</select></label>
		 			<label class="radio clearfix" v-show="show">以前是否参加过我们的活动：<input type="radio" name="join"/><input type="radio" name="join"/></label>
		 			<buttonred class="button" :text="textLogin" :url="urlLogin"></buttonred>
		 		</form>
		 	</reserveframe>
 	</section>
</template>

<script>
	import buttonred from "./button-red.vue"
	import reserveframe from "./reserve-form-frame.vue"
	export default {
		name: 'reserveform',
		props:{
			show:{
				type: Boolean,
				default:"true"
			},
		},
		data(){
			return {
				dataList:[],
				urlLogin:"/reserve/succeed",
				textLogin:"点击确认",
			}
		},
		mounted(){
			let _this=this;
			let url=this.url;
			this.$http({
				methods:"get",
				url:url
			}).then(function(res){
				_this.dataList=res.data
			},function(err){
				console.log(err);
			})
		},
		components:{
			buttonred,
			reserveframe
		}
	}
	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
#reserve-form{
	height: rem(700px);
}
#reserve{
	width: rem(590px);
	margin: 0 auto;
	padding-top: rem(24px);
	background: #f2f2f2;
}
.header{
	height: rem(105px);
	width: rem(560px);
	border-top-left-radius: rem(8px);
	border-top-right-radius: rem(8px);
	padding-left: rem(30px);
	background: #443c3c;
	color: #fff;
	line-height: rem(105px);
	font-size: rem(35px);
}
.form{
	width: rem(590px);
	background: #fff;
}
.prompt{
	display: block;
	width: rem(507px);
	margin: rem(14px) auto;
	padding: rem(15px) rem(30px);
	background: #f0f0f0;
	border-radius: rem(5px);
	font-size: rem(18px);
	line-height: rem(32px);
}
.info{
	margin: rem(22px) rem(48px);
	font-size: rem(20px);
	line-height: rem(42px);
	label{
		display: block;
		margin-bottom: rem(14px);
		input,select{
			height: rem(40px);
			width: rem(360px);
			border: 1px solid #acacac;
			border-radius: 0;
			color: #000;
			padding-left: rem(10px);
		}
		select{
			width: rem(370px);
			background: url(../../assets/img/select-icon.jpg) no-repeat right bottom;
			background-size: auto 100%;
			color: #acacac;
		}
		option{
			width: rem(360px);
			margin-left: rem(20px);
		}
	}
}
.age{
	display: flex!important;
	flex-flow: row nowrap;	
	select{
		margin-right: rem(12px);
		width: rem(100px)!important;
	}
	select:nth-child(1){
		width: rem(145px)!important;
	}
}
.submit{
	margin-top: rem(100px);
	margin-bottom: rem(40px);
	height: rem(65px);
	width: rem(490px);
	background: #d3332b;
	border: 0 none;
	border-radius: rem(5px);
	font-size: rem(23px);
	color: #fff;
}
.footer{
	display: block;
	width: 100%;
	height: rem(8px);
	border-bottom-left-radius: rem(8px);
	border-bottom-right-radius: rem(8px);
	background: #443c3c;
}
.radio{
	input{
		height: rem(20px)!important;
		width: rem(40px)!important;
	}
}
</style>