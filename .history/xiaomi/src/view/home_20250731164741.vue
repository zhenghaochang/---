<script setup>
import { ref } from 'vue'
import cms_1 from '../assets/img/cms_1.jpg'
import cms_2 from '../assets/img/cms_2.jpg'
import cms_3 from '../assets/img/cms_3.jpg'
import cms_4 from '../assets/img/cms_4.jpg'
import request from '../request'

const imgs = [cms_1,cms_2,cms_3,cms_4]

const phoneList = ref([])

const phoneCategoryId = [1]

async function getPhoneGoodsList(){
    //后端接收数组类型的categoryId
    let {data} = await request.post("/goods")
}

</script>

<template>
    <div class="base_div">
            <el-carousel style="width:80%;margin-bottom:20px" height="430px" :interval="5000" arrow="hover">
                <el-carousel-item  v-for="(item,index) in imgs" :key="index">
                    <img style="width:100%;height:100%" :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="main_div">
                <div class="card_div">
                    <div style="grid-row-start:1;grid-row-end:3;background:blue"></div>
                    <div style="background:black" v-for="item in 8" :key="item"></div>
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
    justify-content: center;
}
.card_div{
    width:80%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(2,40vh);
    gap: 10px 10px;
    place-items:stretch stretch ;
}
</style>
