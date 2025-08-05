<script setup>
import { ArrowRight } from '@element-plus/icons-vue'


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
        <!-- 分类标签 -->
        <div>
            <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane label="User" name="first">User</el-tab-pane>
            <el-tab-pane label="Config" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
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
