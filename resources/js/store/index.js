import Vue from 'vue';
import Vuex from 'vuex';
import store from './module/store';
import app from './module/app';
import user from './module/user';


Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
		auth: store,
		app: app,
		userModule: user,
    },
});

