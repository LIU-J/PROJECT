<template>
 	<section id="course">
 		<topImg></topImg>
 		<detailList :url="url1" title="特色课程"></detailList>
 		<detailList :url="url2" title="启蒙基础课程"></detailList>
 	</section>
</template>

<script>
	import topImg from "./common/top-img.vue"
	import detailList from "./common/detail-list.vue"
	export default {
		name:"courseList",
		data(){
			return{
				url1:"./static/api/course-list1.json?v=1.0.1",
				url2:"./static/api/course-list2.json?v=1.0.1",
			}
		},
		components:{
			topImg,
			detailList,
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
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
