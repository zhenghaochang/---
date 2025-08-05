<script setup>
import cms_1 from '../assets/img/cms_1.jpg'
import cms_1 from '../assets/img/cms_2.jpg'
import cms_1 from '../assets/img/cms_1.jpg'
import cms_1 from '../assets/img/cms_1.jpg'

</script>

<template>
    <div>
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style scoped>

</style>
