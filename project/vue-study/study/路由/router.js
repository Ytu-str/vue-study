import {createRouter,createWebHashHistory} from 'vue-router';
import List from './components/List.vue'
import Blog from './components/Blog.vue'
import Login from './components/Login.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:List
        },
        {
            path:"/blog/:id",
            component:Blog
        },
        {
            path:"/login",
            component:Login
        }
    ]
});

//路由拦截
router.beforeEach((to,from,next)=>{
    //验证token，只有存在token的时候才能跳转登录页
    let token = localStorage.getItem('token')
    if(token || to.path === '/login'){
        next()
    }else{
        next('/login')
    }
})

export default router;