<script setup>

</script>

<template>
    <div class="base_div">
        <div style="width:80%;display:flex;flex-direction:column">
            <span style="font-size:25px">我的地址</span>
            <el-scrollbar style="display:flex;flex-wrap:wrap;justify-content:space-between" height="250px">
                
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
.address_div{
    width: 25%;
    height:180px;
    border-radius: 15px;
    border: 3px solid;

}
</style>
