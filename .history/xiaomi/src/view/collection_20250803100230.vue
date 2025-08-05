<script setup>
import {useRoute,useRouter} from 'vue-router'
import {onMounted, ref} from 'vue'
import request from '../request'
import phone_img from '../assets/img/phone1.png' 
import empty from '../assets/img/empty.webp'

const router = useRouter()

const goods = ref([])

function toOrder(item){
    router.push({path:'/order',query:{"id":item.id}})
}

async function getMyCollection(){
    let {data} = await request.get('/favorite/getMyCollection')
    goods.value = data.data
}

onMounted(()=>{
    getMyCollection()
})

</script>

<template>
    <div class="base_div">
        <div style="width:80%;display:flex;align-items:flex-end;">
            <svg xmlns="http://www.w3.org/2000/svg" color="rgb(242, 88,  7)" width="35" height="35" fill="currentColor"  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z"/>
            </svg>
            <span style="font-size:30px;margin-right:15px;color:rgb(75,75,75)">
                我的收藏
            </span>
        </div>
        <el-divider class="divider" />
        <!-- 主体部分 -->
        <div class="main_div" v-if="goods.length != 0">
            <div class="card_div">
                <div class="card" @click="router.push({path:'/goods',query:{id:item.id}})" v-for="(item,i) in goodsList" :key="i">
                    <img style="width:70%;height:auto" :src="phone1" alt="">
                    <span class="nameSpan">{{item.goodsName}}</span>
                    <span class="advantageSpan">{{item.goodsAdvantage}}</span>
                    <div style="display:flex;justify-content:space-around;align-items:flex-end;width:150px">
                        <span style="font-size:22px;color:rgb(255,130, 45)">{{item.goodsPriceNew}}元</span>
                        <span style="color:rgb(150,150,150);text-decoration: line-through" v-if="item.goodsPriceNew != item.goodsPrice">{{item.goodsPrice}}元</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center" v-if="goods==null || goods.length == 0">
            <img style="width:200px;height:200px" :src="empty" alt="">
            <span style="font-size:25px;color:rgb(150,150,150)">这里没东西哦</span>
        </div>
    </div>
</template>

<style scoped>
.base_div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.divider{
    border-width: 4px;
    border-color: rgb(255,130, 45);
    margin:15px 0 0 0;
}
.main_div{
    background-color: rgb(245,245,245);
    width: 100%;
    display: flex;
    justify-content: center;
}
.card_div{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
}
.card{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;          /* 手指 */
    transition: box-shadow 0.3s;
}
.card:hover{
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
