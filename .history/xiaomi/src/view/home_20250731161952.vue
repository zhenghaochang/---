<script setup>
import cms_1 from '../assets/img/cms_1.jpg'
import cms_2 from '../assets/img/cms_2.jpg'
import cms_3 from '../assets/img/cms_3.jpg'
import cms_4 from '../assets/img/cms_4.jpg'

const imgs = [cms_1,cms_2,cms_3,cms_4]

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
    height: 100px;
}
.card_div{
    width:80%;
    display: grid;
    grid-template;
}
</style>
