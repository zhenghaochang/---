<script setup>
import logo from '../assets/img/logo.png'
import { Search } from '@element-plus/icons-vue'
import {useRoute,useRouter} from 'vue-router'
import {goodsList, selectParam,total} from '../global/global'
import {} from '../global/global'

const router = useRouter()
const route = useRoute()

async function search(){
    console.log(selectParam.value.goodsName)
    let {data} = await request.post("/goods/getAllGoodsList",selectParam.value)
    goodsList.value = data.data.goods
    router.push("/allGoods")
    goodsList.value = data.data.goods
}

</script>

<template>
    <div class="base_div">
        <!-- 菜单div -->
        <div style="width:80%;margin-bottom:20px">
            <el-menu
                :default-active="route.path"
                class="menu"
                mode="horizontal"
                @select="handleSelect"
                router
            >
                <div>
                    <img style="width:180px;height:60px;margin-right:200px" :src="logo" alt="">
                </div>
                <el-menu-item class="menu_item" index="/home">首页</el-menu-item>
                <el-menu-item class="menu_item" index="/allGoods">全部商品</el-menu-item>
                <el-menu-item class="menu_item" index="/aboutUs">关于我们</el-menu-item>
                <div>
                    <el-input
                        v-model="selectParam.goodsName"
                        style="margin-left:200px;width:250px"
                        placeholder="请输入商品名称"
                        class="input-with-select"
                        
                    >
                        <template #append>
                            <el-button @click="search" :icon="Search" />
                        </template>
                    </el-input>
                </div>
            </el-menu>
        </div>
        <!-- 菜单div END -->
        <!-- 主体div -->
        <div style="width:100%">
            <router-view></router-view>
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
    align-items: center;
}
.menu_item{
    background-color: transparent !important;
}
</style>
