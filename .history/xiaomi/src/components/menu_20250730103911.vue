<script setup>
import {ref,reactive} from 'vue'

const loginVisible = ref(true)

const loginForm = ref({
    username:'',
    password:''
})

</script>

<template>
    <div class="base_div">
        <el-button color="rgb(80,80,80)" link>登录|注册</el-button>
        <el-button color="rgb(80,80,80)" link>我的订单</el-button>
        <el-button color="rgb(80,80,80)" link>我的收藏</el-button>
        <el-button  style="background-color:rgb(255,130, 45);margin-right:150px;width:100px" link>购物车</el-button>

        <!-- 登录窗口 -->
        <el-dialog v-model="loginVisible" title="登录" width="350">
            <el-form :model="loginForm">
                <el-form-item label="用户名" :label-width="70">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" :label-width="70">
                    <el-input v-model="loginForm.password" autocomplete="off" type="password" show-password />
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
