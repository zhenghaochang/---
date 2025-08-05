import {defineStore} from 'pinia'

const user = {
    id:0,
    username:'',
    name:'',
    numInCart:0,
    token:''
}

export const useUserStore = defineStore('userInfo',{
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
            this.id = user.id,
            this.username = user.username,
            this.name = user.name,
            this.numInCart = user.numInCart,
            this.token = user.token
        },
        logout(){
            this.id = 0,
            this.username = '',
            this.name = '',
            this.numInCart = 0,
            this.token = ''
        },
        updateNumInCart(number){
            
        }
    },
    persist: true    
}
)

