<template>
 	<router-link class="button" :to="url">
	 	<input class="submit" type="submit" :value="title"/>
	 </router-link>
</template>

<script>
	export default {
		name: 'buttonRed',
	props:{
		title:String,
		url:String
	}
}
	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
.button{
	display: block;
	width: rem(490px);
	height: rem(75px);
	line-height: rem(75px);
	text-align: center;
	margin: rem(32px) auto rem(20px);
	background: #d5332b;
	border-radius: rem(5px);
	border: 0 none;
	font-size: rem(24px);
	color: #fff;
	input{
		color: #fff;
	}
}

</style>