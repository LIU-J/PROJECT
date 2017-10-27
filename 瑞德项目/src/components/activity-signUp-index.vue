<template style="height: 100%;">
	<section>
	 	<section id="index">
	 		<form class="form clearfix">
	 			<label class="name"><span>用户名：</span><input type="text"/></label>
	 			<label class="name"><span>密&nbsp;&nbsp;&nbsp;码：</span><input type="text"/></label>
	 			<buttonred :text="textLogin" :url="urlLogin"></buttonred>
	 			<buttonred class="reg" :title="textReg" :url="urlReg"></buttonred>
	 		</form>
	 	</section>
 	</section>
</template>

<script>
	import buttonred from "./common/button-red.vue"
	export default {
		name:"buttonRed",
		data(){
			return{
				urlLogin:"/activity/form",
				urlReg:"/activity/signUp-reg",
				textLogin:"登陆",
				textReg:"注册",
			}
		},
		components:{
			buttonred
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
#index{
	width: 100%;
	height: rem(880px);
	background: url(../assets/img/signUp-index.jpg);
	background-size: 100% 100%;
}
.form{
	width: rem(576px);
	margin: 0 auto; 
	padding-top: rem(230px);
}
.name{
	display: block;
	width: rem(544px);
	height: rem(86px);
	padding-left: rem(30px);
	margin-bottom: rem(15px);
	line-height: rem(86px);
	font-size: rem(30px);
	color: #646565;
	border: 1px solid #d4d4d4;
	border-radius: rem(5px);
	background: #fff;
	input{
		border: 0 none;
	}
}
.reg{
	margin: 0 auto!important;
	background: #696262!important;
}

</style>
