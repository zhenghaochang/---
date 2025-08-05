import {ref} from 'vue'

export const selectParam = ref({
    categoryId:0,
    pageSize:15,
    currentPage:1,
    goodsName:''
})

export async function getGoodsList(){
    let {data} = await request.post("/goods/getAllGoodsList",selectParam.value)
    goodsList.value = data.data.goods
    total.value = data.data.total
}