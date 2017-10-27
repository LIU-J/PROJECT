<template>
 	<section id="mba">
	 	<section id="topImg"></section>
	 	<!--<refreshMore>-->
	 		<mbalist :url="url1" title="成长指标"></mbalist>
	 		<mbalist :url="url2" title="智力开发"></mbalist>
	 		<mbalist :url="url1" title="情商培养"></mbalist>
	 		<mbalist :url="url2" title="语言能力"></mbalist>
	 		<mbalist :url="url1" title="入学须知"></mbalist>
	 		<mbalist :url="url2" title="胎教宝典"></mbalist>
 		<!--</refreshMore>-->
 	</section>
</template>

<script>
	import topImg from "./common/top-img.vue"
	import mbalist from "./common/mba-list.vue"
	import refreshMore from "./common/refreshMore.vue"
	export default {
		name:"mbaList",
		data(){	
			return{
				url1:"./static/api/mba-list1.json?v=1.0.1",
				url2:"./static/api/mba-list2.json?v=1.0.1",
			}
		},	
		components:{
			topImg,
			mbalist,
			refreshMore
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
@import "../assets/css/animate.min.css";
#topImg{
	width: rem(641px);
	height: rem(183px);
	background: url(../assets/img/mba-topBg.jpg);
	background-size: 100% 100%;
}
</style>
