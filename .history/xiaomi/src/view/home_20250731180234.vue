<script setup>
import { onMounted, ref } from 'vue'
import cms_1 from '../assets/img/cms_1.jpg'
import cms_2 from '../assets/img/cms_2.jpg'
import cms_3 from '../assets/img/cms_3.jpg'
import cms_4 from '../assets/img/cms_4.jpg'
import phone from '../assets/img/phone.png'
import phone1 from '../assets/img/phone1.png'
import phone2 from '../assets/img/phone2.png'
import phone3 from '../assets/img/phone3.png'
import phone4 from '../assets/img/phone4.png'
import phone5 from '../assets/img/phone5.png'
import phone6 from '../assets/img/phone6.png'
import phone7 from '../assets/img/phone7.png'
import GG1 from '../assets/img//jiadianGG1.png'
import GG2 from '../assets/img/jiadianGG2.png'
import request from '../request'

const imgs = [cms_1,cms_2,cms_3,cms_4]

const phoneList = ref([])
const phonePicture = [phone1,phone2,phone3,phone4,phone5,phone6,phone7]

const phoneCategoryId = [1]

async function getPhoneGoodsList(){
    //后端接收数组类型的categoryId
    let {data} = await request.post("/goods/getHotGoodsList",phoneCategoryId)
    phoneList.value = data.data
    console.log(phoneList.value)
    phoneList.value.forEach((item,index) => {     // 再给每个对象加属性
        if(phonePicture[index]){
            item.picture = phonePicture[index]
        }
    })
    
}

onMounted(()=>{
    getPhoneGoodsList()
})

</script>

<template>
    <div class="base_div">
            <el-carousel style="width:80%;margin-bottom:20px" height="430px" :interval="5000" arrow="hover">
                <el-carousel-item  v-for="(item,index) in imgs" :key="index">
                    <img style="width:100%;height:100%" :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="main_div">

                <!-- 手机部分 -->
                <div style="width:80%;font-size:25px;color:rgb(80,80,80);margin-top:20px">
                    手机
                </div>
                <div class="card_div">
                    <div style="grid-row-start:1;grid-row-end:3">
                        <img style="width:100%;height:100%" :src="phone" alt="">
                    </div>
                    <div class="card" v-for="(item,i) in phoneList" :key="i">
                        <img style="width:70%;height:auto" :src="item.picture" alt="">
                        <span class="nameSpan">{{item.goodsName}}</span>
                        <span class="advantageSpan">{{item.goodsAdvantage}}</span>
                        <div style="display:flex;justify-content:space-around;align-items:flex-end;width:150px">
                            <span style="font-size:22px;color:rgb(255,130, 45)">{{item.goodsPriceNew}}元</span>
                            <span style="color:rgb(150,150,150);text-decoration: line-through" v-if="item.goodsPriceNew == item.goodsPrice">{{item.goodsPrice}}元</span>
                        </div>
                    </div>
                    <div class="card">浏览更多>></div>
                </div>
            </div>
            <!-- 手机部分END -->
            <!-- 家电部分 -->
            <div style="width:80%;font-size:25px;color:rgb(80,80,80);margin-top:20px">
                    家电
                </div>
                <div class="card_div">
                    <div>
                        <img style="width:70%;height:auto" :src="item.picture" alt="">
                        <span class="nameSpan">{{item.goodsName}}</span>
                        <span class="advantageSpan">{{item.goodsAdvantage}}</span>
                        <div style="display:flex;justify-content:space-around;align-items:flex-end;width:150px">
                            <span style="font-size:22px;color:rgb(255,130, 45)">{{item.goodsPriceNew}}元</span>
                            <span style="color:rgb(150,150,150);text-decoration: line-through" v-if="item.goodsPriceNew == item.goodsPrice">{{item.goodsPrice}}元</span>
                        </div>
                    </div>
                    <div></div>
                    <div class="card" v-for="(item,i) in jiadianList" :key="i">
                        <img style="width:70%;height:auto" :src="item.picture" alt="">
                        <span class="nameSpan">{{item.goodsName}}</span>
                        <span class="advantageSpan">{{item.goodsAdvantage}}</span>
                        <div style="display:flex;justify-content:space-around;align-items:flex-end;width:150px">
                            <span style="font-size:22px;color:rgb(255,130, 45)">{{item.goodsPriceNew}}元</span>
                            <span style="color:rgb(150,150,150);text-decoration: line-through" v-if="item.goodsPriceNew == item.goodsPrice">{{item.goodsPrice}}元</span>
                        </div>
                    </div>
                    <div class="card">浏览更多>></div>
                </div>
            </div>
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    justify-content: center;
}
.main_div{
    background-color: rgb(245,245,245);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card_div{
    width:80%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(2,40vh);
    grid-auto-flow: column;
    gap: 10px 10px;
    place-items:stretch stretch ;
    margin-top: 15px;
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
.nameSpan{
    white-space: nowrap;      /* 不换行 */
    overflow: hidden;       /* 超出隐藏 */
    text-overflow: ellipsis;/* 省略号 */
    max-width: 80%; 
    color: rgb(50,50,50);
}
.advantageSpan{
    white-space: nowrap;      /* 不换行 */
    overflow: hidden;       /* 超出隐藏 */
    text-overflow: ellipsis;/* 省略号 */
    max-width: 90%; 
    font-size: 12px;
    color:rgb(150,150,150);
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
