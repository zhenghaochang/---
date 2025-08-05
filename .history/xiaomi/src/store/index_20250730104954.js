import {defineStore} from 'pinia'

const useUserStore = defineStore('userStore',{
    state:()=>({
        id:0,
        username:'',
        name:'',
        num
    })
})