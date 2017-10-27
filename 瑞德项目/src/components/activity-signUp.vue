<template>
 	<section id="activity-signUp">
 		<h3 class="list-tit">最新活动</h3>
 		<h4 class="list-tit2">瑞德英语夏令营火热招生中</h4>
 		<section class="top"></section>
		<section class="info">
			<p>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
		</section>
		<router-link class="button" :to="urlButtom1">报名参加</router-link>
 	</section>
</template>

<script>
	export default {
		name:"brandDetailList",
		data(){
			return{
				urlButtom:"/activity/form",
				urlButtom1:"/activity/signUp-index"
			}
		},
		methods:{
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
	border-top: 1px solid #d4d4d4;
	background: #fdfdfd;
	font-size: rem(30px);
	line-height: rem(68px);
	color: #454545;
	padding-left: rem(40px);
}
.list-tit2{
	height: rem(112px);
	width: 100%;
	border-top: 1px solid #d4d4d4;
	font-size: rem(38px);
	line-height: rem(112px);
	color: #009bda;
	padding-left: rem(40px);
	
}
.top{
	width: rem(586px);
	height: rem(235px);
	margin: 0 auto;
	background: url(../assets/img/listDetail-top.jpg) no-repeat;
	background-size: 100% 100%;
}
.info{
	width: rem(586px);
	margin: rem(40px) auto;
	line-height: rem(42px);
	font-size: rem(24px);
	color: #453d3d;
	p{
		text-indent: 2em;
	}
}
.button{
	display: block;
	width: rem(570px);
	height: rem(75px);
	line-height: rem(75px);
	text-align: center;
	margin: rem(40px) auto rem(60px);
	background: #009BDA;
	border-radius: rem(5px);
	border: 0 none;
	font-size: rem(32px);
	color: #fff;
}

</style>
