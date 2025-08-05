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
                    <img style="width:180px;height:60px;margin-right:200px" :src="logo" alt="">
                </div>
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">全部商品</el-menu-item>
                <el-menu-item index="3">关于我们</el-menu-item>
                <div>
                    <el-input
                        v-model="input3"
                        style="max-width: 600px"
                        placeholder="Please input"
                        class="input-with-select"
                        >
                        <template #prepend>
                            <el-select v-model="select" placeholder="Select" style="width: 115px">
                            <el-option label="Restaurant" value="1" />
                            <el-option label="Order No." value="2" />
                            <el-option label="Tel" value="3" />
                            </el-select>
                        </template>
                        <template #append>
                            <el-button :icon="Search" />
                        </template>
                    </el-input>
                </div>
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
