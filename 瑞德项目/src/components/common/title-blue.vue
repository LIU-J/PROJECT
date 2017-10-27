<template>
 	<h3 class="list-tit" v-show="title">{{title}}</h3>
</template>

<script>
	export default {
		name: 'titleBlue',
	props:{
		title:String
	}
}
	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
.list-tit{
	height: rem(68px);
	width: rem(610px);
	border-bottom: 3px solid #0b6aa6;
	padding-left: rem(30px);
	background: #fff;
	font-size: rem(30px);
	line-height: rem(68px);
	color: #008dce;
}

</style>