<template>
 	<section id="activity">
 		<topImg></topImg>
 		<detailList :url="url" title=""></detailList>
 	</section>
</template>

<script>
	import topImg from "./common/top-img.vue"
	import detailList from "./common/detail-list.vue"
	export default {
		name:"activityList",
		data(){
			return{
				url:"./static/api/activity-list.json?v=1.0.1",
			}
		},
		components:{
			topImg,
			detailList
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
.list{
	width: 100%;
	margin-top: rem(45px);
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	li{
		width: rem(574px);
		height: rem(86px);
		border-radius: rem(6px);
		border: 1px #d4d4d4 solid;	
		margin-bottom: rem(5px);	
		background: url(../assets/img/list-left.png) no-repeat rem(530px) rem(28px);
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
		background: url(../assets/img/list-hover.png) no-repeat;
		background-size: 100% 100%;
		background-color: none;
		a{
			color: #fff;
		}
	}
}
</style>
