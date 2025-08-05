<script setup>
import Menu from '../src/components/menu.vue'
import github from './assets/img/github.png'

</script>

<template>
    <div>
        <el-container>
            <el-header class="header"><Menu></Menu></el-header>
            <el-main class="main"><router-view></router-view></el-main>
            <el-footer>
                <div style="width:100%;height:50vh;background:rgb( 47, 47, 47);display:flex;flex-direction:column;justify-content:space-around;align-items:center">
                    <div style="width:100%;display:flex;justify-content:space-around;color:white;">
                        <div class="span">
                            七天无理由退换货
                        </div>
                        <div class="span">
                            满99元全场免邮
                        </div>
                        <div class="span">
                            100%品质保证
                        </div>
                    </div>
                    <el-divider style="height:1px" />
                    <div style="width:100%;display:flex;justify-content:center">
                        <img style="width:4%;height:auto" :src="github" alt="">
                    </div>
                    <div style="color:rgb(180,180,180)">
                        <el-button class="btn" link>首页</el-button>
                        <el-divider direction="vertical" />
                        <el-button class="btn" link>全部商品</el-button>
                        <el-divider direction="vertical" />
                        <el-button class="btn" link>关于我们</el-button>
                    </div>
                    <div style="color:rgb(180,180,180);font-size:">
                        最终解释权归小郑所有
                    </div>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped>
.header{
/*     background-color: blue; */
    width:100%
}
/* .main{
    background-color: blue;
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
} */
.span{
    font-size:20px;
    font-weight: 600;
}
.btn{
    color:rgb(180,180,180);
    /* margin-right:13px */
}
</style>
