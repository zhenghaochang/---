<script setup>
import {ref,reactive} from 'vue'
import request from '../request/index'
import { ElMessage } from 'element-plus'
import {useUserStore} from '../store/index'


const store = useUserStore()


const loginVisible = ref(false)

const loginForm = ref({
    username:'',
    password:''
})

const user = ref({
    id:0,
    username:'',
    name:'',
    numInCart:0,
    token:''
})

const loginFormRef = ref()

const validateUsername = (rule,value,callback)=>{
    if(value.length==0){
      callback(new Error("用户名不能为空"))
    }else{
      callback()
    }
  }

  const validatePassword = (rule,value,callback)=>{
    if(value.length<4){
      callback(new Error("密码小于4位"))
    }else{
      callback()
    }
  }

  const rules = {
    username:[{required:true,message:'用户名不能为空',validator:validateUsername}],
    password:[{required:true,message:'密码必须大于4位',validator:validatePassword}]
  }


async function login(){
    const valid = await loginFormRef.value.validate
    if(valid){
        let {data} = await request.post("/user/login",loginForm.value)
        if(data.code == 200){
            ElMessage.success('登录成功')
            user.value = data.data
            store.changeInfo(user.value)
            console.log(store.token)
        }else{
            ElMessage.error(data.msg)
        }
    }
}

</script>

<template>
    <div class="base_div">
        <el-button color="rgb(80,80,80)" @click="loginVisible = true" link>登录|注册</el-button>
        <el-button color="rgb(80,80,80)" link>我的订单</el-button>
        <el-button color="rgb(80,80,80)" link>我的收藏</el-button>
        <el-button  style="background-color:rgb(255,130, 45);margin-right:150px;width:100px"  link>购物车</el-button>

        <!-- 登录窗口 -->
        <el-dialog v-model="loginVisible"  title="登录" width="300">
            <el-form :model="loginForm" ref="loginFormRef" :rules="rules">
                <el-form-item label="用户名" prop="username" :label-width="70">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password" :label-width="70">
                    <el-input v-model="loginForm.password" autocomplete="off" type="password" show-password />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="loginVisible = false">取消</el-button>
                    <el-button type="primary" @click="login">
                    登录
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
