<template>
 	<section id="brand">
 		<topImg></topImg>
 		<detailList :url="url" title=""></detailList>
 	</section>
</template>

<script>
	import topImg from "./common/top-img.vue"
	import detailList from "./common/detail-list.vue"
	export default {
		name:"brandList",
		data(){
			return{
				url:"./static/api/brand-list.json?v=1.0.1",
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
</style>
