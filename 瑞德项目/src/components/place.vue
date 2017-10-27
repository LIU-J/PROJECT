<template>
 	<section id="place">
 		<titleBlack title="中心位置查询"></titleBlack>
 		<select class="search" name="1111">
 			<option class="search-checked">选择你想要查询的瑞德启蒙的中心</option>
 			<option v-for="(item,key) in searchData" key="key">{{item.name}}</option>
 		</select>
 		<ul class="info">
 			<li><span>ADD：</span>拱墅区湖州街50号</li>
         	 <li><span>TEL：</span>86-571-9999999</li>
 		</ul>
 		<img class="map" src="../assets/img/map.jpg"/>
 	</section>
</template>

<script>
	import titleBlack from "./common/title-black.vue"
	export default {
		name:"brandList",
		data(){
			return{
				searchData:[
					{
						name:"西湖区",
						tel:"86-571-9999999",
						add:"拱墅区湖州街50号"
					},
					{
						name:"上城区",
						tel:"86-571-8888888",
					},
					{
						name:"下城区",
						tel:"86-571-7777777",
					},
					{
						name:"滨江区",
						tel:"86-571-6666666",
					},
				]
			}
		},
		components:{
			titleBlack
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
@import "../assets/css/animate.min.css";
.list-tit{
	height: rem(68px);
	width: 100%;
	border-bottom: 3px solid #0b6aa6;
	padding-left: rem(30px);
	background: #fff;
	font-size: rem(30px);
	line-height: rem(68px);
	color: #3c3535;
}
.search{
	margin: rem(30px) rem(45px) 0;
	width: rem(530px);
	height: rem(60px);
	background: #fff;
	border: 1px #acacac solid;
	font-size: rem(22px);
	color: #acacac;
	padding-left: rem(10px);
}	
.info{
	padding-left: rem(36px);
	padding-top: rem(28px);
	font-size: rem(24px);
	color: #787878;
	/*@include font-dpr(24px); 
	@include lineHeight-dpr(rem(36px))*/
	span{
		color: #009bda;
	}
}
.map{
	width: rem(640px);
	height: rem(504px);
	border-top: rem(18px) #fff solid;
	border-bottom: rem(18px) #fff solid;
	margin-top: rem(20px);
}
</style>
