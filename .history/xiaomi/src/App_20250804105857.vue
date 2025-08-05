<script setup>
import Menu from '../src/components/menu.vue'


</script>

<template>
    <div>
        <el-container>
            <el-header class="header"><Menu></Menu></el-header>
            <el-main class="main"><router-view></router-view></el-main>
            <el-footer>
                <div style="width:100%;height:30vh;background:rgb(100,100,100)">
                    <div style="width:100%;display:flex;justify-content:space-around">
                        <div>
                            七天无理由退换货
                        </div>
                        <div>
                            满99元全场免邮
                        </div>
                        <div>
                            100%品质
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
</style>
