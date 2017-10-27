<template>
	<section class="refreshMore" @touchstart="scroll" @touchmove="scroll" @touchend="scroll" @touchcancel="scroll" :style="{transform:'translateY('+moveY+'px)',transition:transition.val}">
		<span ref="span" class="refresh">{{refreshText.text}}</span>
		<section class="refreshMore-content">
			<slot>无内容</slot>
		</section>
		<span class="more">{{moreText.text}}</span>
	</section>
</template>

<script>
export default {
	name: 'refreshMore',
	props:{
		ajaxParam:{
			type:Object,
			default(){
				return{
					url:"",
					pageNum:"1"
				}
			}
		}
	},
	data(){
		return{
			refreshText:{
				text:"",
				init:"下拉刷新",
				release:"松开刷新",
				loading:"正在刷新中"
			},
			moreText:{
				text:"",
				init:"上拉加载",
				release:"松开加载",
				loading:"正在加载中"
			},
			moveY:0,
			startY:0,
			spanH:0,
			transition:{
				val:"none",
				none:"none",
				ani:"transform 0.2s"
			},
			ajaxSymbol:false
		}
	},
	created(){
		let url=this.ajaxParam.url;
		let pageNum=this.ajaxParam.pageNum;
		this.$http({
			methods:"get",
			url:url,
			params:{
				pageNum:pageNum
			},
			data:{}
		}).then((res)=>{//res响应对象
	      this.$store.commit("refreshMore_updateData",{
	        data:res.data
	      });
	    },(err)=>{//err错误对象
	      console.log("请求错误",err)
	    });
	},
	methods:{
		getHeight(){
			let webH=document.documentElement.scrollHeight;//网页高度
			let viewH=document.documentElement.clientHeight;//可视高度
			return{
				webH,
				viewH
			}
		},
		initText(){
			let webH=this.getHeight().webH;
			let viewH=this.getHeight().viewH;
//			console.log(viewH,webH);
			if (viewH>webH) {
				this.refreshText.text=this.refreshText.init;
			}
			else{
				this.refreshText.text=this.refreshText.init;
				this.moreText.text=this.moreText.init;
			};
			this.spanH=this.$refs.span.clientHeight//节点span高度
		},
		scroll(e){
			let y=e.changedTouches[0].pageY;
			let scrollY=document.documentElement.scrollTop+document.body.scrollTop;
			if (e.type=="touchstart") {
				this.transition.val=this.transition.none;
				this.initText();
				this.startY=y
			}
			else if(e.type=="touchmove"){
//				console.log(222222)
				var distance=this.startY-y;
				if (distance>=0) {//上移
					let webH=this.getHeight().webH;
					let viewH=this.getHeight().viewH;
					if(scrollY>webH-viewH-1){
						this.moreText.text=this.moreText.init;
						this.moveY=-Math.abs(distance)/4
						if(Math.abs(this.moveY)>this.spanH){
//							console.log(33333)
							this.ajaxSymbol=true;
							this.moreText.text=this.moreText.release;
						}
					}
				}
				else{
					if (scrollY==0) {
						this.refreshText.text=this.refreshText.init;
						this.moveY=Math.abs(distance)/4
						if(Math.abs(this.moveY)>this.spanH){
//							console.log(4444)
							this.ajaxSymbol=true;
							this.refreshText.text=this.refreshText.release;
						}
					}
				}
			}
			else if(e.type=="touchend" || e.type=="touchcancel"){
				var pageNum;
				this.transition.val=this.transition.ani;
				this.moveY=0;
				//判断页面
				if (this.moreText.text==this.moreText.init) {
					this.ajaxParam.pageNum++
					pageNum=this.ajaxParam.pageNum
				}
				else if (this.refreshText.text==this.refreshText.init) {
					pageNum=1
				}
				//判断刷新
				if (this.ajaxSymbol) {
					this.ajaxSymbol=false
					if (pageNum=1) {
						this.refreshText.text==this.refreshText.loading
					}
					else{
						this.moreText.text==this.moreText.loading
					}
					
				}
			}
		}
	}
}	

</script>

<style scoped lang="scss">
	@import "../../assets/css/px2rem.scss";
.refresh,.more{
	position: absolute;
	width: 100%;
	left: 0;
	text-align: center;
	font-size: rem(35px);
	color: #808080;
	line-height: rem(50px);
	height: rem(50px);
}
.refresh{
	top: rem(-50px);
}
</style>