<script setup>
import Menu from '../src/components/menu.vue'


</script>

<template>
    <div>
        <el-container >
            <el-header class="header"><Menu></Menu></el-header>
            <el-main style="display:flex;flex-direction:column;justify-content:center"><router-view></router-view></el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<style scoped>
.header{
/*     background-color: blue; */
    width:100%
}
</style>
