import axios from 'axios'
import {useUserStore} from '../store/index'

const store = useUserStore()

const request = axios.create({
    baseURL:'http://localhost:8080',
    timeout:10000
})

request.interceptors.request.use(
    config => {
        const token = store.token
        if(token){
            
        }

        return config
    }
)









export default request