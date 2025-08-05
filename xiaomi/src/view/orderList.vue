<script setup>
import { computed, onMounted, ref } from 'vue'
import phone from '../assets/img/phone2.png'
import request from '../request'
import {useRouter} from 'vue-router'
import { ElMessage } from 'element-plus'
import empty from '../assets/img/empty.webp'


const router = useRouter()

const cardList = ref([])

async function getCardList(){
    let {data} = await request.get("/order/getCardList")
    cardList.value = data.data
}

function toPay(orderId){
    router.push({path:"/confirmOrder",query:{'orderId':orderId}})
}

async function remove(orderId){
    await request.get("/order/remove",{params:{'orderId':orderId}})
    ElMessage.success("订单已取消")
    getCardList()
}


onMounted(()=>{
    getCardList()

})


</script>

<template>
    <div class="base_div">
        <div style="width:80%;display:flex;align-items:flex-end;margin-top:20px">
            <el-icon size="35px" color="rgb(242, 88,  7)"><List /></el-icon>
            <span style="font-size:30px;margin-right:15px;color:rgb(75,75,75)">
                我的订单
            </span>
        </div>
        <el-divider class="divider" />

        <div class="card_div" v-if="cardList.length != 0">
            <el-card class="card" v-for="(item,i) in cardList" :key="i">
                <template #header>
                    <div style="width:100%;display:flex;justify-content:space-between;align-items:center">
                        <span style="color:rgb(255,130, 45)">
                            订单编号：{{item[0].orderId}}
                        </span>
                        <span>
                            订单时间：{{item[0].orderTime}}
                        </span>
                    </div>
                </template>
                <el-table :data="item" style="width:80%" border="true">
                    <el-table-column label="">
                        <img :src="phone" style="width:100%;height:100%" alt="">
                    </el-table-column>
                    <el-table-column label="商品名称" property="goodsName" show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column label="商品数量" resizable="true" property="goodsNumber">
                    </el-table-column>
                    <el-table-column label="商品单价(元)" property="goodsPrice">
                    </el-table-column>
                    <el-table-column label="配送费(元)">
                        包邮
                    </el-table-column>
                    <el-table-column label="小计(元)"  property="goodsPrice">
                        <template #default="scope">
                            <span style="color:rgb(255,130, 45)">
                                {{scope.row.goodsNumber*scope.row.goodsPrice}}
                            </span>
                        </template>
                    </el-table-column>
                </el-table>
                <template #footer>
                    <div style="width:100%;display:flex;justify-content:space-between;align-items:center">
                        <div>
                            <span>
                                共
                            </span>
                            <span style="color:rgb(255,130, 45)">
                                {{item.length}}
                            </span>
                            <span>
                                件商品
                            </span>
                        </div>
                        <div>
                            <span>
                                合计：
                            </span>
                            <span style="font-size:30px;color:rgb(255,130, 45)">
                                {{item.reduce((s, row) => s + (row.goodsPrice * row.goodsNumber), 0).toFixed(2)}}元
                            </span>
                        </div>
                    </div>
                    <div style="width:100%;display:flex;justify-content:flex-end" v-if="item[0].status != 1">
                        <el-button color="rgb(150,150,150)" style="width:150px;height:50px;color:white" @click="remove(item[0].orderId)">取消订单</el-button>
                        <el-button color="rgb(255, 102, 0)" style="width:150px;height:50px;color:white" @click="toPay(item[0].orderId)">去支付</el-button>
                    </div>
                    <div style="width:100%;display:flex;justify-content:flex-end" v-else>
                        <span style="font-size:25px;color:rgb(150,150,150)">已支付</span>
                    </div>
                </template>
            </el-card>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center" v-if="cardList==null || cardList.length == 0">
            <img style="width:200px;height:200px" :src="empty" alt="">
            <span style="font-size:20px;color:rgb(150,150,150)">这里没东西哦</span>
        </div>

    </div>
</template>

<style scoped>
.base_div{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: rgb(245,245,245); */
}
.divider{
    border-width: 4px;
    border-color: rgb(255,130, 45);
}
.card_div{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center
}
.card{
    width: 80%;
    margin-bottom: 30px;
}
</style>
