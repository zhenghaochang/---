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
        <div style="width:80%;display:flex;justify-content:space-between">
            <span style="font-size:23px;color:rgb(80,80,80)">
                {{goods.goodsName}}
            </span>
            <el-button link>关于</el-button>
        </div>
        <el-divider class="shadow-line" />
        <div class="main_div">
            <img style="width:50%;height:auto" :src="phone1" alt="">
            <div style="width:50%;display:flex;flex-direction:column;align-items:center">
                <span>
                    {{goods.goodsName}}
                </span>
                <span>{{goods.goodsAdvantage}}</span>
                <span>{{goods.goodsParameter}}</span>
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
.shadow-line {
  position: relative;
  margin: 16px 0;
  border-top: 1px solid transparent;   
}

.shadow-line::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: #dcdfe6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

</style>
