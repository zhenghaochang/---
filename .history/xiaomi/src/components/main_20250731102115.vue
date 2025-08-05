<script setup>
import logo from '../assets/img/logo.png'

</script>

<template>
    <div class="base_div">
        <div style="width:80%">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                
            >
            <div>
                
            </div>
                <div>
                    <img style="width:150px;height:50px;margin-right:150px" :src="logo" alt="">
                </div>
                <el-menu-item index="1">Processing Center</el-menu-item>
                <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3" disabled>Info</el-menu-item>
                <el-menu-item index="4">Orders</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
}
</style>
