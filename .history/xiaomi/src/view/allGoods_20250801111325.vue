<script setup>
import { ArrowRight } from '@element-plus/icons-vue'


</script>

<template>
    <div class="base_div">
        <!-- 面包屑 -->
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>全部商品</el-breadcrumb-item>
            <el-breadcrumb-item>分类</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 面包屑END -->
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
