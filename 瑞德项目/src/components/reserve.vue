<template>
	<reserveForm title="课程预约试听" prompt="免费名额有限，现在就留下您的电话号码，我们的顾问会尽快联系您，并为您预约一个合适的时间。" :show="bool">
	</reserveForm>
</template>

<script>
	import reserveForm from "./common/reserve-form.vue"
	export default {
		name:"brandList",
		data(){
			return{
				bool:false
			}
		},
		mounted(){
			let _this=this;	
			_this.$http({
				method:"get",
				url:"./static/api/brand-list.json?v=1.0.1",
			}).then(function(res){
				_this.listData=res.data;
			},function(err){
			})
		},
		components:{
			reserveForm
		}
		
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/css/px2rem.scss";
</style>
