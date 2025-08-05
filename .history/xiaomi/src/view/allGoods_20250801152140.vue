<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import {ref} from 'vue'


const activeName = ref('0')

</script>

<template>
    <div class="base_div">
        <!-- 面包屑 -->
        <div style="width:80%">
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>全部商品</el-breadcrumb-item>
                <el-breadcrumb-item>分类</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 面包屑END -->
        <br>
        <!-- 分类标签 -->
        <div style="width:80%;display:flex;">
            <div style="width:30px">分类</div>
            <el-tabs
                v-model="activeName"
                type="card"
                style="width:100%;display:flex"
                @tab-click="handleClick"
            >
                
                <el-tab-pane label="全部" name="0"></el-tab-pane>
                <el-tab-pane label="手机" name="1"></el-tab-pane>
                <el-tab-pane label="电视" name="2"></el-tab-pane>
                <el-tab-pane label="空调" name="3"></el-tab-pane>
                <el-tab-pane label="洗衣机" name="4"></el-tab-pane>
                <el-tab-pane label="保护套" name="5"></el-tab-pane>
                <el-tab-pane label="充电器" name="6"></el-tab-pane>
                <el-tab-pane label="充电宝" name="7"></el-tab-pane>
            </el-tabs>
        </div>
        <!-- 分类标签END -->
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
