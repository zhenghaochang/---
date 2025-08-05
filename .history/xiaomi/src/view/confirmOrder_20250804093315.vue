<script setup>
import request from "../request";
import {useRoute} from 'vue-router'
import { onMounted, ref } from "vue";
import phone from '../assets/img/phone2.png'

const route = useRoute()

const orderList = ref([])

async function getByOrderId(){
    let {data}  = await request.get("/order/getByOrderId",{params:{'orderId':route.query.orderId}})
    orderList.value = data.data
}

onMounted(()=>{
    getByOrderId()
})

</script>

<template>
    <div class="base_div">
        <div class="div">
            <span style="font-size:25px">我的地址</span>
            <el-scrollbar wrap-style="width:100%;" view-style="display:flex;flex-wrap:wrap" max-height="250px">
               <div class="address_div" v-for="item in 4" :key="item">

                </div> 
            </el-scrollbar>
        </div>
        <el-divider class="divider" />
        <div class="div">
            <span style="font-size:25px">我的商品</span>
            <el-table :data="orderList"  style="width: 100%">
                <el-table-column label="" >
                    <img :src="phone" style="width:50%;height:auto" alt="">
                </el-table-column>
                <el-table-column prop="goodsName" label="商品名称"  />
                <el-table-column prop="goodsPrice" label="单价"  />
                <el-table-column prop="goodsNumber" label="数量"  />
                <el-table-column  label="小计">
                    <template  #default="scope">
                        <div style="color:rgb(255,130, 45)">
                           {{scope.row.goodsNumber * scope.row.goodsPrice}} 
                        </div>
                        
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
}
.address_div{
    width: 27%;
    height:180px;
    border-radius: 15px;
    border: 3px solid;
    margin-right: 40px;
    margin-bottom: 20px;
}
.div{
    width:80%;
    display:flex;
    flex-direction:column;
}
</style>
