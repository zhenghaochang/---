<script lang="ts" setup>
import {ref,reactive, onMounted} from 'vue'
import request from '../request/index'
import phone from '../assets/img/phone2.png'
import { ElMessage, ElNotification } from 'element-plus'
import {useUserStore} from '../store/index'
import {useRoute,useRouter} from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'
import empty from '../assets/img/cart-empty.png'

const router = useRouter()
const store = useUserStore()

interface Goods{
    id:number,
    goodsId:number,
    goodsName:string,
    goodsPrice:number,
    number:number,
    userId:number,
    xiaoji:number
}


const goodsList = ref<Goods[]>([])
const totalAmount = ref(0)
const select = ref(0)
const selectList = ref<Goods[]>([])

async function getGoodsList(){
    let {data} = await request.get('/shoppingCart/getGoodsList')
    goodsList.value = data.data
    /* let i = 0;
    for(i = 0;i < goodsList.value.length ;i++){
        totalAmount.value += goodsList.value[i].number * goodsList.value[i].goodsPrice;
    } */

}



async function handleChange(row:Goods){
    console.log(row)
    let {data} = await request.put('/shoppingCart/update',row)
    if(data.code == 200){
        ElNotification({
            title: '',
            message: '数量已更改',
            type: 'success',
        })
        getGoodsList()
    }else{
        ElNotification({
            title: '',
            message: '数量更改失败',
            type: 'error',
        })
    }
}

async function remove(row:Goods){
    let {data} = await request.delete('/shoppingCart/delete',{params:{'goodsId':row.goodsId}})
    if(data.code == 200){
        ElNotification({
            title: '',
            message: '删除成功',
            type: 'success',
        })
        store.updateNumInCart();
        /* location.reload() */
        getGoodsList()
    }
}

function selectOne(selection,row){
    if(selection.includes(row)){
        select.value ++;
        selectList.value.push(row)
        totalAmount.value += row.goodsPrice * row.number
        /* console.log(selectList.value) */
    }
    if(!selection.includes(row)){
        select.value --;
        const idx = selectList.value.findIndex(item => item.id === row.id);
        selectList.value.splice(idx,1)
        totalAmount.value -= row.goodsPrice * row.number
        /* console.log(selectList.value) */
    }

}

function selectAll(selection){
    select.value = selection.length
    if(selection.length == 0){
        selectList.value = []
        totalAmount.value = 0
    }else{
        /* selectList.value = cloneDeep(goodsList.value) */
        selectList.value = selection
        /* console.log(selectList.value) */
        let i = 0;
        let stand = 0;
        for(i = 0;i < goodsList.value.length ;i++){
            stand += goodsList.value[i].number * goodsList.value[i].goodsPrice;
        }
        totalAmount.value = stand
    }
}

const scIds = ref([])
async function toPay(){
    let {data} = await request.post("/order/insertOrder",selectList.value)
    if(data.code == 200){
        const orderId = data.data
        for(let i = 0;i<selectList.value.length;i++){
            scIds.value.push(selectList.value[i].id)
        }
        router.push({path:'/confirmOrder',query:{'orderId':orderId,'scIds':scIds.value}})
    }else{
        ElMessage.error("请勾选商品")
    }
}

onMounted(() => {
    getGoodsList()
})

</script>

<template>
    <div class="base_div">
        <div style="width:80%;display:flex;align-items:flex-end;margin-top:20px">
            <el-icon size="35px" color="rgb(242, 88,  7)"><ShoppingCartFull /></el-icon>
            <span style="font-size:30px;margin-right:15px;color:rgb(75,75,75)">
                我的购物车
            </span>
            <span style="color:rgb(120,120,120);font-size:12px">
                温馨提示: 产品是否购买成功，以最终下单为准哦，请尽快结算
            </span>
        </div>
        <el-divider class="divider" />


        <div style="width:100%;display:flex;flex-direction:column;align-items:center" v-if="goodsList.length != 0">
            <el-table :data="goodsList" style="width: 80%" stripe="true" @select="selectOne" @select-all="selectAll">
                <el-table-column type="selection" width="80" />
                <el-table-column label="商品图片" width="100" >
                    <img :src="phone" style="width:100%;height:100%" alt="">
                </el-table-column>
                <el-table-column  property="goodsName"  label="商品名称" width="300"></el-table-column>
                <el-table-column property="goodsPrice" label="单价(元)" width="150" />
            
                <el-table-column align="center" property="number" label="数量" width="200" show-overflow-tooltip>
                    <template #default="scope">
                        <div>
                            <el-input-number v-model="scope.row.number" :min="1" @change="handleChange(scope.row)" />
                        </div>
                    </template>
                    <!-- <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" /> -->
                </el-table-column>
                <el-table-column align="center" property="xiaoji" label="小计(元)"  width="150" >
                    <template #default="scope">
                        <div style="color:rgb(255,130, 45)">
                            {{scope.row.xiaoji}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column  align="center" label="" width="150" >
                    <template #default="scope">
                        <div>
                            <el-button @click="remove(scope.row)" link><el-icon><DeleteFilled /></el-icon></el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

            <div style="width:80%;margin-top:20px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;background:white">
                <div style="width:35%;display:flex;justify-content:space-around;align-items:baseline">
                    <el-button style="height:30px;width:10%;margin-left:20px" @click="()=>router.push('/allGoods')" link>继续购物</el-button>
                    <span style="color:rgb(210,210,210)">|</span>
                    <el-text style="">共
                        <span style="color:rgb(255,130, 45)">{{goodsList.length}}</span>
                        件商品，已选择
                        <span style="color:rgb(255,130, 45)">{{select}}</span>
                        件
                    </el-text>
                </div>

                <div style="display:flex;align-items:flex-end">
                    <span>
                        <span style="font-size:15px">合计：</span>
                        <span style="font-size:35px;color:rgb(255,130, 45)">{{totalAmount}}元</span>
                    </span>
                    <el-button class="btn" color="rgb(255, 102, 0)" @click="toPay" v-if="goodsList.length > 0">
                        去结算
                    </el-button>
                    <el-button class="btn" color="rgb(150,150,150)" v-else disabled>
                        去结算
                    </el-button>
                </div>

            </div>
        </div>

        <div style="display:flex;flex-direction:column;align-items:center" v-if="goodsList==null || goodsList.length == 0">
            <img style="" :src="empty" alt="">
            <span style="font-size:20px;color:rgb(150,150,150);margin-top:10px;margin-bottom:10px">好像什么都没有</span>
        </div>
        
    </div>
</template>

<style scoped>
.base_div{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(245,245,245);
}
.divider{
    border-width: 4px;
    border-color: rgb(255,130, 45);
}
.btn{
    height:60px;
    width:200px;
    margin-left:30px;
    /* background:rgb(255, 102, 0); */
    color:white
}
</style>
