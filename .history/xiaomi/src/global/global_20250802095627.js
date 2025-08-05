import {ref} from 'vue'
import request from '../request'

export const selectParam = ref({
    categoryId:0,
    pageSize:15,
    currentPage:1,
    goodsName:''
})

