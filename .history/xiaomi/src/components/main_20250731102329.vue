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
                    <img style="width:150px;height:60px;margin-right:200px" :src="logo" alt="">
                </div>
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">全部商品</el-menu-item>
                <el-menu-item index="3">关于我们</el-menu-item>
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
