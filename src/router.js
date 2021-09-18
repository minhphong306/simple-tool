import VueRouter from 'vue-router'
import Home from './components/home'
import About from './components/about'
import ApiGenerator from './components/tools/api_generator'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/about',
            component: About
        },
        {
                path: '/tools/api-gen',
            component: ApiGenerator
        }
    ]
});

export default router