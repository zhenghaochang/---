<script setup>
import phone1 from '../assets/img/phone1.png'
import {useRoute} from 'vue-router'
import request from '../request'
import { ref,onMounted } from 'vue'

const route = useRoute()

const goods = ref({
    id:0,
    goodsName:'',
    goodsAdvantage:'',
    goodsPrice:0,
    goodsPriceNew:0,
    goodsParameter:''
})

async function getGoodsById(){
    let {data} = await request.get("/goods/getById",{params:{'id':route.query.id}})
    goods.value = data.data
}

onMounted(()=>{
    getGoodsById()
})

</script>

<template>
    <div class="base_div">
        <div class="main_div">
            <img style="width:50%;height:auto" :src="phone1" alt="">
            <div style="width:50%;display:flex;flex-direction:column;align-items:center">
                <span></span>
            </div>
        </div>

    </div>

</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main_div{
    width: 80%;
    display: flex;
}
</style>
