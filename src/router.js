import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
    // mode: 'history',
    routes:[
        {path:'/',  name:'Landing', component: () =>import('./components/Lander')},
        {path:'/newsletters',  name:'Newsletters', component: () =>import('./components/Newsletters')},
        
    ]
});

export default router;