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
                    component:
                }
            ]
        }
    ]
})

export default router