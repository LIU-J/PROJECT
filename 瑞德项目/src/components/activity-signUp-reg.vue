<template>
 	<section id="signUp-form">
 		<reserveframe title="即刻注册获得免费试听课程" prompt="成功注册为会员后，您将可以免费获得一次试听瑞德课程的机会并在光临瑞德启蒙教育中心后得到一份精美礼物。">
 			<form class="info" method="post">
 				<label class="name">&nbsp;&nbsp;&nbsp;用户名：<input type="text"/></label>
 				<label class="name">用户密码：<input type="text"/></label>
 				<label class="name">重复密码：<input type="text"/></label>
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
 				<label class="tel">手机号码：<input type="text"/></label>
 				<!--<router-link class="submit" :to="urlLogin">
 					<input class="submit" type="submit" value="点击确认"/>
 				</router-link>-->
 				<buttonred class="button" :text="textLogin" :url="urlLogin"></buttonred>
 			</form>
 		</reserveframe>
 	</section>
</template>

<script>
	import buttonred from "./common/button-red.vue"
	import reserveframe from "./common/reserve-form-frame.vue"
	export default {
		name:"brandList",
		data(){
			return{
				urlLogin:"/activity/form",
				textLogin:"点击确认",
			}
		},
		components:{
			buttonred,
			reserveframe
		}
	}
</script>

<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
@import "../assets/css/px2rem.scss";
@import "../assets/css/animate.min.css";
#signUp-form{
	height: 100%;
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
.content{
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
			background: url(../assets/img/select-icon.jpg) no-repeat right bottom;
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
.button{
	margin-top: rem(100px);
	margin-bottom: rem(40px);
}
.footer{
	width: 100%;
	height: rem(8px);
	border-bottom-left-radius: rem(8px);
	border-bottom-right-radius: rem(8px);
	background: #443c3c;
}

</style>
