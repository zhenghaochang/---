import axios from 'axios'
import { ElMessage } from 'element-plus'
import {useUserStore} from '../store/index'
import {loginVisible} from '../global/global'



const request = axios.create({
    baseURL:'http://localhost:8080',
    timeout:10000
})

request.interceptors.request.use(
    config => {
        const store = useUserStore()
        const token = store.token
        console.log("token:"+token)
        if(token){
            config.headers['authorization'] = token
        }
        return config
    },
    error => Promise.reject(error)
)

request.interceptors.response.use(
    response =>{
        return response
    },
    error => {
        const store = useUserStore()
        console.log(error)
        if(error.status == 401){
            ElMessage.error('请登录')
            store.logout()
            loginVisible.value = true
        }else{
            ElMessage.error(error.response?.data?.msg || '网络错误')
        }
        return Promise.reject(error)
    }

)




export default request