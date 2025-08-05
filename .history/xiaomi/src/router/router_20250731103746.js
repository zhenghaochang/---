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
                    path:""
                }
            ]
        }
    ]
})

export default router