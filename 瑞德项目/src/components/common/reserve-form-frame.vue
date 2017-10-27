<template>
		<section id="reserve">
			<h3 class="header">{{title}}</h3>
		 	<section class="form clearfix">
		 		<span class="prompt">
		 			{{prompt}}
		 		</span>
		 		<slot></slot>
		 	</section>
		 	<span class="footer"></span>
	 	</section>
</template>

<script>
	import buttonred from "./button-red.vue"
	export default {
		name: 'reserveFormFrame',
		props:{
			title: String,
			prompt: String,
		},
		data(){
			return {
				dataList:[],
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
			buttonred
		}
	}
	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";

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