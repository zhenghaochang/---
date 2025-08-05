import {createRouter,createWebHashHistory} from 'vue-router'

let router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:()=>import('../components/main.vue'),
            redirect:"/home",
            children:[
                {
                    path:"/home",
                    component:() => import('../view/home.vue')
                },
                {
                    path:"/allGoods",
                    component:() => import('../view/allGoods.vue')
                },
                {
                    path:"/goods",
                    component:()=>import('../view/goods.vue')
                },
                {
                    path:"/orderList"
                }
            ]
        }
    ]
})

export default router