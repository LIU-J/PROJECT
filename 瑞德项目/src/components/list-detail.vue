<template>
 	<section id="list-detail">
 		<titleBlack title="最终标题页"></titleBlack>
 		<section class="top"></section>
		<section class="text">
			<p>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
			<p></br></p>
			<p>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
			<p></br></p>
			<p>深圳瑞德启蒙教育投资有限公司（0-12岁美式启蒙教育专家）秉承“全球启蒙 卓越思维（Global Inspiration Fantastic Thinking）”的理念。源自美国百年教育出版社--美国麦格希教育集团。麦格希集团成立于1884，是全球领先的教育出版与服务品牌，在33个国家 设有分支机构，以65种语言提供儿童早期教育、中小学教育、高等教育、专业教育、测评与报告等领域的产品和服务。</p>
			<p></br></p>
		</section>
		
 	</section>
</template>

<script>
	import titleBlack from "./common/title-black.vue"
	export default {
		name:"brandDetailList",
		data(){
			return{
				listData:[]
			}
		},
		methods:{
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
.top{
	width: rem(586px);
	height: rem(235px);
	margin: rem(32px) auto;
	background: url(../assets/img/listDetail-top.jpg) no-repeat;
	background-size: 100% 100%;
}
.text{
	width: rem(586px);
	margin: rem(30px) auto;
	line-height: rem(42px);
	font-size: rem(24px);
	color: #453d3d;
	p{
		text-indent: 2em;
	}
}
</style>
