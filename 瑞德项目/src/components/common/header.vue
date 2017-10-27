<template>
	<section id="headerTop">
		<a class="left" @touchstart="appMove" href="javascript:viod(0)"><i class="fa fa-bars"></i></a>
		<section class="middle"></section>
		<a class="right" href="tel:13599999999"><i class="fa fa-phone"></i></a>
		<section class="nav" ref="nav" @touchmove.prevent :style="'left:'-appMove+'px'">
			<router-link v-for="(item,key) in navData" key="key" class="fa" :class="item.className" :to="item.url"><i>{{item.name}}</i></router-link>
		</section>
	</section>
</template>

<script>
	import Bus from "../../assets/js/bus.js"
	export default {
	  name: 'headerTop',
	  data(){
	  	return{
	  		navData:[
					{
						name:"网站首页",
						url:"/",
						className:"fa-home",
					},
					{
						name:"瑞德品牌",
						url:"/brand",
						className:"fa-cube",
					},
					{
						name:"课程介绍",
						url:"/course",
						className:"fa-book",
					},
					{
						name:"活动资讯",
						url:"/activity",
						className:"fa-location-arrow",
					},
					{
						name:"父母MBA",
						url:"/mba",
						className:"fa-university",
					},
					{
						name:"新闻中心",
						url:"/news",
						className:"fa-newspaper-o",
					},
					{
						name:"预约试听",
						url:"/reserve",
						className:"fa-assistive-listening-systems",
					},
		  		]
		  	}
		},
		methods:{
			appMove(e){
				e.preventDefault();
				let navNode=this.$refs.nav;
				let width=navNode.clientWidth;
				Bus.$emit("move",width);
			}
			
		},
	  }
	
</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
	#headerTop{
		display: flex;
		height: rem(84px);
		width: 100%;
		background: url(../../assets/img/top-bg.jpg);
		background-size: auto 100%; 
	}
	.left,.right{
		flex: none;
		width: rem(95px);
		height: 99%;
		@include flexCenter()
	}
	.left{
		align-self: flex-start;
	}
	.right{
		align-self: flex-end;
		}
	.fa{
		color: #afa9a9;
		font-size: rem(40px);
		}
	.middle{
		width: 100%;
		height: 95%;
		border-left: 1px #2a2424 solid;
		border-right: 1px #2a2424 solid;
		background: url(../../assets/img/title.png) no-repeat;
		background-size: rem(367px) rem(43px);
		background-position-x: rem(52px);
		background-position-y: rem(24px);
	}
	.nav{
		position: fixed;
		z-index: 9999;
		left:rem(-285px);
		top: 0;
		display: flex;
		flex-flow: row wrap;
		align-content: flex-start;
		width: rem(285px);
		height: 100%;
		background: #3c3535;
		a,a:hover{
			flex: none;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding-left: rem(50px);
			color: #fff;
			width: 100%;
			height: rem(95px);
			font-size: rem(32px);
			border-top: 1px solid #584c4c;
			border-bottom: 1px solid #000;
			i{
				text-indent: rem(10px);
			}
		}
	}
</style>