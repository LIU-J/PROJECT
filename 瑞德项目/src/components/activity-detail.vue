<template>
 	<section id="list-detail">
 		<titleBlue title="最新活动"></titleBlue>
 		<detailList :url="url1"></detailList>
 		<titleBlue title="VIP活动区"></titleBlue>
 		<detailList :url="url2"></detailList>
 		<titleBlue title="会员活动区"></titleBlue>
 		<detailList :url="url3"></detailList>
 	</section>
</template>

<script>
	import titleBlue from "./common/title-blue.vue"
	import detailList from "./common/activity-detail-list.vue"
	export default {
		name:"detail",
		data(){
			return{
				url1:"./static/api/activity-detial-list1.json?v=1.0.1",
				url2:"./static/api/activity-detial-list2.json?v=1.0.1",
				url3:"./static/api/activity-detial-list3.json?v=1.0.1",
			}
		},
		components:{
			titleBlue,
			detailList
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
@import "../assets/css/animate.min.css";


</style>
