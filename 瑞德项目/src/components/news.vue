<template>
 	<section id="list">
 		<refreshMore :ajaxParam="ajaxParam">
	 		<section id="list-detail">
		 		<titleBlue title="刷新、加载页面测试"></titleBlue>
		 		<detailList :url="url1"></detailList>
		 		<detailList :url="url1"></detailList>
		 		<detailList :url="url1"></detailList>
 			</section>
 		</refreshMore>
 	</section>
</template>

<script>
import headerTop from "./common/header.vue"
import refreshMore from "./common/refreshMore.vue"
				import titleBlue from "./common/title-blue.vue"
				import detailList from "./common/activity-detail-list.vue"
export default {
  name: 'news',
  data() {
    return {
      msg:"list",
      listData:[],
      ajaxParam:{
      	url:"./static/api/activity-detial-list1.json?v=1.0.1",
		pageNum:"1"
      },
     			url1:"./static/api/activity-detial-list1.json?v=1.0.1",
				url2:"./static/api/activity-detial-list2.json?v=1.0.1",
				url3:"./static/api/activity-detial-list3.json?v=1.0.1",
    }
  },
  components:{
		headerTop,
		refreshMore,
				titleBlue,
				detailList
	},
  computed:{
		dataJson(){
			return this.$store.state.refreshMore.dataJson
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import "../assets/css/px2rem.scss";
	@import "../assets/css/animate.min.css";
</style>
