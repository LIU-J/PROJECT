<template>
	<section>
 		<h3 class="list-tit" v-show="title">{{title}}</h3>
 		<ul class="list clearfix">
			<li v-for="(item,key) in dataList" :key="key">
				<router-link :to="item.url">{{item.name}}</router-link>
			</li>
		</ul>
 	</section>
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
.list-tit{
	height: rem(68px);
	width: 100%;
	border-bottom: 3px solid #0b6aa6;
	background: #fff;
	font-size: rem(30px);
	text-align: center;
	line-height: rem(68px);
	color: #008dce;
}
.list{
	width: 100%;
	margin-top: rem(45px);
	margin-bottom: rem(70px);
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	li{
		width: rem(574px);
		height: rem(86px);
		border-radius: rem(6px);
		border: 1px #d4d4d4 solid;	
		margin-bottom: rem(5px);	
		background: url(../../assets/img/list-left.png) no-repeat rem(530px) rem(28px);
		background-size: rem(20px) rem(30px);
		background-color: #fff;
		line-height: rem(30px);
		font-size: rem(30px);
		a{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			color: #3c3535;
		}
	}
	li:hover{
		background: url(../../assets/img/list-hover.png) no-repeat;
		background-size: 100% 100%;
		background-color: none;
		a{
			color: #fff;
		}
	}
}
</style>