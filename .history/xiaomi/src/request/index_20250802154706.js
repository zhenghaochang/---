import axios from 'axios'
import {useUserStore} from '../store/index'

const store = 

const request = axios.create({
    baseURL:'http://localhost:8080',
    timeout:10000
})

request.interceptors.request.use(
    config => {
        const token = 

        return config
    }
)









export default request