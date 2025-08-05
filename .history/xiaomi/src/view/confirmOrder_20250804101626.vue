<script setup>
import request from "../request";
import {useRoute} from 'vue-router'
import { onMounted, ref } from "vue";
import phone from '../assets/img/phone2.png'

const route = useRoute()

const orderList = ref([])
const totalAmount = ref(0)

const payDto = ref({
    scId 
})

async function getByOrderId(){
    let {data}  = await request.get("/order/getByOrderId",{params:{'orderId':route.query.orderId}})
    orderList.value = data.data
    console
}

function total(){
    for(let i = 0;i<orderList.value.length;i++){
        totalAmount.value = totalAmount.value + orderList.value[i].goodsNumber * orderList.value[i].goodsPrice
    }
}

async function pay(){

}

onMounted(async()=>{
    await getByOrderId()
    await total()
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
        <br>
        <div style="width:80%;display:flex;justify-content:flex-end;align-items:baseline">
            <span style="font-size:20px">
                总计：
            </span>
            <span style="font-size:35px;color:rgb(255,130,45)">
                {{totalAmount}}元
            </span>
        </div>
        <br>
        <div style="width:80%;display:flex;justify-content:flex-end">
            <el-button style="width:210px;height:70px;color:white" color="rgb(155,155,155)">取消订单</el-button>
            <el-button style="width:210px;height:70px;color:white" @click="pay" color="rgb(255,130, 45)">确认支付</el-button>
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
