<template>
	<section id="footerBottom">
		<section class="layer1 clearfix">
			<a class="layer1-left" href="tel:13999999999"><i class="fa fa-phone"></i>免费咨询热线</a>
			<router-link class="layer1-right" to="/place"><i class="fa fa-location-arrow"></i>查看位置</router-link>
		</section>
		<section class="layer2">
			<a href="##">移动版</a><a href="##">标准版</a>
		</section>
		<section class="layer3">瑞德启蒙教育&copy;2013&nbsp;版权所有</section>
	</section>
</template>

<script>
	export default {
	  name: 'footerBottom',
	  }
</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
	#footerBottom{
		position: absolute;
		z-index: 999;
		bottom: 0;
		width: 100%;
	}
	.layer1{
		background: #fdfdfd;
		border: 1px solid #fff;
		border-bottom: rem(4px) solid #0b6aa6;
		}
	.layer1-left,.layer1-right{
		width: 49%;
		height: rem(68px);
		font-size: rem(22px);
		text-align: center;
		line-height: rem(68px);
	}
	.layer1-left{
		float: left;
		border-right: 1px #ccc solid;
	}
	.layer1-right{
		float: right;
	}
	.fa{
		color: #373131;
		font-size: rem(40px);
		padding-right: rem(10px);
	}
	.layer2{
		width: 100%;
		background: #e6e6e6;
		text-align: center;
		height: rem(55px);
		line-height: rem(30px);
		a{
			display: inline-block;
			font-size: rem(18px);
			padding: 0 rem(20px);
			color: #747474;
		}
		a:nth-child(1){
			margin-left: rem(-10px);
			border-right: 1px #ccc solid;
		}
	}
	.layer3{
		width: 100%;
		background: #fff;
		text-align: center;
		height: rem(40px);
		line-height: rem(40px);
		font-size: rem(18px);
		color: #747474;
	}
</style>