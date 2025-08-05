import axios from 'axios'
import { ElMessage } from 'element-plus'
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
            config.headers['authorization'] = token
        }
        return config
    },
    error => promise.reject(error)
)

request.interceptors.response.use(
    response =>{
        if(response.data.code == 200){
            return response;
        }else{
            ElMessage.error("请求失败")
            return response;
        }
    },
    error => {
        if(error.status == 401){
            ElMessage.error('登录已过期，请重新登录')
            store.logout()
            
        }
    }

)









export default request