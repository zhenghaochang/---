<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import {ref} from 'vue'


const activeName = ref('0')
const total = ref(0)
const currentPage = ref()

const goodsList = ref([])


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
            <div style="width:50px;height:6vh;display:flex;align-items:center;font-weight:700;">分类</div>
            <el-tabs
                v-model="activeName"
                type="card"
                style="width:100%;display:flex"
                @tab-change="handleClick"
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
        <!-- 主体部分 -->
        <div class="main_div">
            <div class="card_div">
                <div class="card" v-for="(item,i) in goodsList" :key="i">
                    <img style="width:70%;height:auto" :src="phone1" alt="">
                    <span class="nameSpan">{{item.goodsName}}</span>
                    <span class="advantageSpan">{{item.goodsAdvantage}}</span>
                    <div style="display:flex;justify-content:space-around;align-items:flex-end;width:150px">
                        <span style="font-size:22px;color:rgb(255,130, 45)">{{item.goodsPriceNew}}元</span>
                        <span style="color:rgb(150,150,150);text-decoration: line-through" v-if="item.goodsPriceNew == item.goodsPrice">{{item.goodsPrice}}元</span>
                    </div>
                </div>
            </div>
            <div>
                <el-pagination background layout="prev, pager, next" page-size=15 :current-page="" :total="total" />
            </div>
        </div>
        <!-- 主体部分END -->
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.main_div{
    background-color: rgb(245,245,245);
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card_div{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(3,1fr);
    gap: 10px 10px;
    place-items: stretch stretch ;

}
.card{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;          /* 手指 */
    transition: box-shadow 0.3s;
}
</style>
