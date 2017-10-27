<template>
	<section id="indexList">
		<ul class="list clearfix" ref="list">
			<li v-for="(item,key) in listData" key="key">
				<router-link class="fa" :class="item.className" :to="item.url"></br><i>{{item.name}}</i></router-link>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
	name: 'indexList',
	data(){
	return{
		listData:[
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
}

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
.list{
	margin-top: rem(3px);
	margin-left: rem(1px);
}
.list li{
	float: left;
	width: rem(192px);
	height: rem(148px);
	border-radius: rem(3px);
	margin: rem(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	a{
		text-align: center;
		font-size: rem(66px);
		line-height: rem(84px);
		color: #fff;
		i{
			display: block;
			font-size: rem(18px);
			line-height: rem(26px);
		}
	}
}
.list{
	li:nth-child(1){background: #0bbebb;}
	li:nth-child(2){background: #afd23a;}
	li:nth-child(3){background: #f48221;}
	li:nth-child(4){background: #de0000;}
	li:nth-child(5){background: #3eb7ee;}
	li:nth-child(6){background: #6eb943;}
}
</style>