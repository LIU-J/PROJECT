import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import ani from "./ani";
import refreshMore from "./refreshMore";

export default new Vuex.Store({
	
	modules:{
		ani,
		refreshMore,
		app:{
			state:{
				count:0
			},
			mutations:{//同步
				add(state,payload){
					state.count++
				},
				reduce(state,payload){
					state.count--
				}
			},
			actions:{//异步
				add(context,payload){
					context.commit("add",payload)
				},
				reduce(context,payload){
					context.commit("reduce",payload)
				}
			},
			modules:{
			},
		},
		list:{
			state:{
				count:10
			},
			mutations:{//同步
				add(state,payload){
					state.count++
				},
				reduce(state,payload){
					state.count--
				}
			},
			actions:{//异步
				add(context,payload){
					context.commit("add",payload)
				},
				reduce(context,payload){
					context.commit("reduce",payload)
				}
			},
			modules:{
			},
		},
	}
	
});
