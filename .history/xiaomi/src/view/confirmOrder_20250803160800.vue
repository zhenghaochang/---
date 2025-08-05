<script setup>

</script>

<template>
    <div class="base_div">
        <div class="div">
            <span style="font-size:25px">我的地址</span>
            <el-scrollbar wrap-style="width:100%;" view-style="display:flex;flex-wrap:wrap" max-height="250px">
               <div class="address_div" v-for="item in 4" :key="item">

                </div> 
            </el-scrollbar>
        </div>
        <div>

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
    width: 27%;
    height:180px;
    border-radius: 15px;
    border: 3px solid;
    margin-right: 40px;
    margin-bottom: 20px;
}
.div{
    width:80%;display:flex;flex-direction:column
}
</style>
