import {defineStore} from 'pinia'

const user = {
    id:0,
    username:'',
    name:'',
    numInCart:0,
    token:''
}

const useUserStore = defineStore('userStore',{
    state:()=>({
        id:0,
        username:'',
        name:'',
        numInCart:0,
        token:''
    }),
    getters:{},
    actions:{
        changeInfo(user){
            this.id = user.
        }
    }
}
)