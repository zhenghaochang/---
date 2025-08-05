import {createRouter,createWebHashHistory} from 'vue-router'

let router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:()=>import('../components/main.vue'),
            d
        }
    ]
})

export default router