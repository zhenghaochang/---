<script setup>
import {ref,reactive} from 'vue'

const loginVisible = ref(true)

</script>

<template>
    <div class="base_div">
        <el-button color="rgb(80,80,80)" link>登录|注册</el-button>
        <el-button color="rgb(80,80,80)" link>我的订单</el-button>
        <el-button color="rgb(80,80,80)" link>我的收藏</el-button>
        <el-button  style="background-color:rgb(255,130, 45);margin-right:150px;width:100px" link>购物车</el-button>

        <!-- 登录窗口 -->
        <el-dialog v-model="loginVisible" title="Shipping address" width="500">
            <el-form :model="form">
            <el-form-item label="Promotion name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="Please select a zone">
                <el-option label="Zone No.1" value="shanghai" />
                <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
            </el-form>
            <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                Confirm
                </el-button>
            </div>
            </template>
        </el-dialog>
    </div>
</template>

<style scoped>
.base_div{
    background-color:rgb(80,80,80);
    width:100%;
    height:45px;
    display: flex;
    justify-content:flex-end;
}
</style>
