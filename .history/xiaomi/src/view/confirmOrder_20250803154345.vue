<script setup>

</script>

<template>
    <div class="base_div">
        <div style="width:80%;display:flex;flex-direction:column">
            <span style="font-size:25px">我的地址</span>
            <el-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
        </div>
    </div>
</template>

<style scoped>
.base_div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
}
</style>
