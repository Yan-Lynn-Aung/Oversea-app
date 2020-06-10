require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import * as VeeValidate from 'vee-validate';
import  routes  from  './route';
import store from '../js/store/index';
import App from './components/App'; 
import axios from 'axios'
import VueAxios from 'vue-axios';
import VueI18n from 'vue-i18n';
import en from '../js/lang/en';
import ja from '../js/lang/ja';
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(Vuex);

// router============================
const router = new VueRouter({
    routes,
    mode: 'history'
}); 
// router============================
//permission=========================
router.beforeEach((to, from, next) => {
    if(to.meta.reqiuresAuth){
      const authUser = store.getters.currentUser
      if(!authUser || !authUser.token){
        next({name:'login'})
      }
      else if(authUser || authUser.token){
        // for admin 
         if(to.meta.recruiter){
          const authUser = store.getters.currentUser
          if(authUser.role === 2){
            next()
          }else{
            alert('1')
            next({name:'Unauthorized'})
          }
        }
        // for User component
       if(to.meta.jobseeker){
        const authUser = store.getters.currentUser
        if(authUser.role === 3){
          next()
        }else{
          next({name:'Unauthorized'})
        }
      }
        next()
      }
    }
    else{
      next()
    }
  })
//permission=========================

// languages=========================
const languages = {
  en: en,
  ja: ja,
}
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'ja',
  messages: languages,
})
// languages=========================


// main app==========================
Vue.component('App',App)
// main app==========================
const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,

});
