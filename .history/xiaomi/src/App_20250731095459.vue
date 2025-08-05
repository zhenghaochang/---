<script setup>
import Menu from '../src/components/menu.vue'


</script>

<template>
    <div style="display:flex;flex-direction:column;justify-content:center">
        <el-container >
            <el-header class="header"><Menu></Menu></el-header>
            <el-main ><router-view></router-view></el-main>
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
