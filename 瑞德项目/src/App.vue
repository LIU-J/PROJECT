<template>
  <section id="app" :style="{transform:'translate('+appMove+'px)'}">
  	<headerTop></headerTop>
	<transition :enter-active-class="ani_enter" :leave-active-class="ani_leave">
		<router-view id="content"></router-view>
	</transition>
	<footerBottom></footerBottom>
  </section>
</template>

<script>
import headerTop from "./components/common/header.vue"
import footerBottom from "./components/common/footer.vue"
import Bus from "./assets/js/bus.js"
import flexible from "./assets/js/flexible.js"
flexible();

export default {
  name: 'app',
  components:{
  	headerTop,
  	footerBottom,
  },	
  data(){
  	return{
  		appMove:0
  	}
  },
  mounted(){
  	let _this=this;
  	Bus.$on("move",function(data){
  		if(_this.appMove==0){
  			_this.appMove=data;
  		}
  		else{
  			_this.appMove=0;
  		}
  	})
  },
  beforeUpdate(){
  	let path=this.$route.path;
  	var arr=path.match(/\//g);
  	this.$store.commit("ani_translate",{class:arr.length})
  },
  computed:{
  	ani_leave(){
  		return this.$store.state.ani.ani_leave;
  	},
  	ani_enter(){
  		return this.$store.state.ani.ani_enter;
  	}
  }
  
}
</script>

<style lang="scss">
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/px2rem.scss";
@import "./assets/css/animate.min.css";
#app {
	transition:transform 0.2s;
	position: relative;
	box-sizing: border-box;
	padding: rem(84px) 0 rem(166px);
	min-height: 100%;
}
body,html{height: 100%;}
#headerTop{
	position: absolute;
	z-index: 9999;
	top: 0;
	left: 0;
}
.animated{
	position: fixed;
	z-index: 999;
	background: #f2f2f2;
}
.leave{
	animation-name:leave;
}
@keyframes leave{
	0%{
		transform: translateX(0);
	};
	100%{
		transform: translateX(-40%);
	}
}
.enter{
	animation-name:enter;
}
@keyframes enter{
	0%{
		transform: translateX(100%);
	};
	100%{
		transform: translateX(0);
	}
}
#content{
	width: rem(640px);
}
#footerBottom{
	position: absolute;
	bottom: 0;
	left: 0;
}
</style>
