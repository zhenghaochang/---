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
            <img style="width:40%;height:auto" :src="phone1" alt="">
            <div style="width:50%;display:flex;flex-direction:column;align-items:center;margin-top:50px">
                <span style="font-size:20px;">
                    {{goods.goodsName}}
                </span>
                <span style="color:rgb(145,145,145);font-size:12px">{{goods.goodsAdvantage}}</span>
                <span style="color:rgb(145,145,145);font-size:15px;margin-top:10px">{{goods.goodsParameter}}</span>
                <br>
                <br>
                <span style="align-self:flex-end;font-size:35px;color:rgb(255,130, 45);margin-right:15px" v-if="goods.goodsPriceNew == goods.goodsPrice">{{goods.goodsPriceNew}}元</span>
                <div style="width:100%;display:flex;justify-content:flex-end;align-items:flex-end" v-else>
                    <span style="font-size:35px;color:rgb(255,130, 45);margin-right:15px">{{goods.goodsPriceNew}}元</span>
                    <span style="color:rgb(150,150,150);font-size:25px;text-decoration: line-through">{{goods.goodsPrice}}元</span>
                </div>
                <div style="width:100%;display:flex;justify-content:flex-end">
                    <el-button style="width:30%;height:50px;color:white" color="rgb(255,130,45)">加入购物车</el-button>
                    <el-button style="width:30%;height:50px;color:white" color="rgb(150,150,150)">
                        <el-icon size=""><Star /></el-icon>收藏
                    </el-button>
                </div>
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
    justify-content: space-between;
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 1);
}

</style>
