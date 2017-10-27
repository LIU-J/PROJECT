<template>
	<section id="index">
		<slider></slider>
		<indexList></indexList>
		
		<section>{{appCount}}</section>
		<section>{{listCount}}</section>
		<button @touchstart="actAdd">加</button>
		<button @touchstart="actReduce">减</button>
	</section>
</template>

<script>
import slider from "./common/slider.vue"
import indexList from "./common/index-list.vue"
export default {
	
 	components:{
  		slider,
  		indexList
	},
	methods:{
		actAdd(){
			this.$store.commit("add")
		},
		actReduce(){
			this.$store.dispatch("reduce")
		}
	},
	mounted(){
	},

	computed:{
		appCount(){
			return this.$store.state.app.count
		},
		listCount(){
			return this.$store.state.list.count
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";

button{
	width: rem(40px);
	height: rem(40px);
	font-size: rem(24px);
	border: 1px solid #006DC7;
}
</style>