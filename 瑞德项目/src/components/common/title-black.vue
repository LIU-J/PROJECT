<template>
	<h3 id="titleBlack"><span>|</span>
		{{title}}</h3>
</template>

<script>
	export default {
	name: 'titleBlack',
	props:{
		title:String
	}
	}
	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
#titleBlack{
	height: rem(68px);
	width: rem(600px);
	border-bottom: rem(3px) solid #0096c5;
	border-top: 1px solid #d4d4d4;
	background: #fdfdfd;
	font-size: rem(30px);
	line-height: rem(68px);
	color: #454545;
	padding-left: rem(40px);
	span{
		font-weight: bold;
		color:  #00afd5;
	}
}
</style>