<script setup>
import Menu from '../src/components/menu.vue'


</script>

<template>
    <div>
        <el-container>
            <el-header class="header"><Menu></Menu></el-header>
            <el-main class="main"><router-view></router-view></el-main>
            <el-footer>
                <div style="width:100%;height:30vh;background:rgb(100,100,100);display:flex;flex-direction:column;justify-content:space-around">
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
</style>
