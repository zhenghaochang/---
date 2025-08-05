<script setup>
import logo from '../assets/img/logo.png'

</script>

<template>
    <div class="base_div">
        <div style="width:80%">
            <el-menu
                :default-active="activeIndex"
                class="menu"
                mode="horizontal"
                @select="handleSelect"
                
            >
                <div>
                    <img style="width:180px;height:60px;margin-right:200px" :src="logo" alt="">
                </div>
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">全部商品</el-menu-item>
                <el-menu-item index="3">关于我们</el-menu-item>
                <div>
                    <el-input
                        v-model="input3"
                        style="margin-left:150px;width:250px"
                        placeholder="Please input"
                        class="input-with-select"
                    >
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
.menu{
    display:flex;
    align-items: ;
}
</style>
