<template>
	<section>
 		<titleBlack title="最新活动"></titleBlack>
 		<section class="layer clearfix">
	 		<section class="imgBG"></section>
			<section class="info">
				<span>活动时间: 2013.8.19 (11:00-12:00)</span>
				<span>活动对象: 7-12岁宝宝</span>
				<span>活动地点: 宝安瑞德启蒙中心教室</span>
			</section>
			<router-link class="button" :to="urlButtom">报名参加</router-link>
		</section>
</template>

<script>
	import titleBlack from "./title-black.vue"
	export default {
		name: 'mbaList',
		props:{
			url:{
				type: String,
				default:""
			},
			title: String,
		},
		data(){
			return {
				dataList:[],
			}
		},
		components:{
			topImg
		}
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
		}
	}
	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
.list-tit{
	height: rem(68px);
	width: 100%;
	border-bottom: 3px solid #0b6aa6;
	border-top: 1px solid #d4d4d4;
	background: #fdfdfd;
	font-size: rem(30px);
	line-height: rem(68px);
	color: #454545;
	padding-left: rem(40px);
	span{
		font-weight: bold;
		color:  #00afd5;
	}
}
.list{
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	li{
		width: 100%;
		height: rem(66px);
		border-top: 1px #d4d4d4 solid;	
		border-bottom: 1px #fff solid;	
		background: url(../../assets/img/list-left.png) no-repeat rem(600px) rem(18px);
		background-color: #f1f2f2;
		line-height: rem(30px);
		font-size: rem(22px);
		a{
			display: flex;
			padding-left: rem(50px);
			align-items: center;
			width: 100%;
			height: 100%;
			color: #3c3535;
		}
	}
	li:hover{
		a{
			color: #ccc;
		}
	}
}
</style>