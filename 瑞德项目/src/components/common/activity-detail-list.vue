<template>
	<ul class="layer clearfix">
		<li v-for="(item,key) in dataList" :key="key" class="clearfix">
		 	<span class="imgBG"><img src="../../../static/img/activityDetail-img1.jpg" style="height: 100%;width: 100%;"/></span>
			<section class="info">
				<span>活动时间: {{item.time}}</span>
				<span>活动对象: {{item.object}}</span>
				<span>活动地点: {{item.location}}</span>
			</section>
			<router-link class="button" :to="urlButtom">报名参加</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'detailList',
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
				urlButtom:"/activity/signUp",
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
		}
	}
	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
.layer{
	width: rem(590px);
	background: #fff;
	margin: rem(27px) auto rem(38px);
	li{
		border-bottom: rem(30px) solid #f2f2f2;
	}
}
.imgBG{
	display: block;
	width: rem(576px);
	height: rem(278px);
	margin: rem(9px) auto;
	margin-bottom: rem(4px);
}
.info{
	font-size: rem(24px);
	line-height: rem(38px);
	padding-left: rem(28px);
	span{
		display: block;
		height: rem(38px);
	}
}
.button{
	display: block;
	width: rem(570px);
	height: rem(75px);
	line-height: rem(75px);
	text-align: center;
	margin: rem(22px) rem(10px) rem(12px);
	background: #009BDA;
	border-radius: rem(5px);
	border: 0 none;
	font-size: rem(32px);
	color: #fff;
}
</style>