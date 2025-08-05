<script setup>
import cms_1 from '../assets/img/cms_1.jpg'
import cms_2 from '../assets/img/cms_2.jpg'
import cms_3 from '../assets/img/cms_3.jpg'
import cms_4 from '../assets/img/cms_4.jpg'

</script>

<template>
    <div>
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <img :src="cms_`${}`" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>

</style>
