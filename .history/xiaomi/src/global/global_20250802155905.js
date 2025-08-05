import {ref} from 'vue'
import request from '../request'

export const selectParam = ref({
    categoryId:0,
    pageSize:15,
    currentPage:1,
    goodsName:''
})

export const goodsList = ref([])

export const total = ref(0)

export async function getGoodsList(){
    let {data} = await request.post("/goods/getAllGoodsList",selectParam.value)
    goodsList.value = data.data.goods
    total.value = data.data.total
}

export const loginVisible = ref(false)
const registVisible = ref(false)