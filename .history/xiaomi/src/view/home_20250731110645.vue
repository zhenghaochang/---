<script setup>
import cms_1 from '../assets/img/cms_1.jpg'
import cms_2 from '../assets/img/cms_2.jpg'
import cms_3 from '../assets/img/cms_3.jpg'
import cms_4 from '../assets/img/cms_4.jpg'

</script>

<template>
    <div class="base_div">
            <el-carousel style="width:80%" height="430px" :interval="5000" arrow="always">
                <el-carousel-item  v-for="(item,index) in 4" :key="index">
                    <img style="width:100%;height:100%" :src="" alt="">
                </el-carousel-item>
            </el-carousel>
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
