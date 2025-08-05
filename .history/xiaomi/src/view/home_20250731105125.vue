<script setup>
import cms_1 from '../assets/img/cms_1.jpg'
import cms_2 from '../assets/img/cms_2.jpg'
import cms_3 from '../assets/img/cms_3.jpg'
import cms_4 from '../assets/img/cms_4.jpg'

</script>

<template>
    <div>
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item,index) in 4" :key="index">
                <img style="width:100%;height:100%" :src="cms" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>

</style>
