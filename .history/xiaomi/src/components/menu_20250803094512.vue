<script setup>
import {ref,reactive} from 'vue'
import request from '../request/index'
import { ElMessage } from 'element-plus'
import {useUserStore} from '../store/index'
import {loginVisible,registVisible} from '../global/global'
import {use} from '../router/router'


const store = useUserStore()




const loginForm = ref({
    username:'',
    password:''
})

const registForm = ref({
    username:'',
    password:'',
    rePassword:'',
    name:''
})

const user = ref({
    id:0,
    username:'',
    name:'',
    numInCart:0,
    token:''
})

const loginFormRef = ref()
const registFormRef = ref()

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

  const validateRePassword = (rule,value,callback)=>{
    if(value.length<4){
      callback(new Error("密码小于4位"))
    }else{
      if(value != registForm.value.password){
        callback(new Error("密码不一致"))
      }else{
        callback()
      }
    }
  }

  const rules = {
    username:[{required:true,message:'用户名不能为空',validator:validateUsername}],
    password:[{required:true,message:'密码必须大于4位',validator:validatePassword}],
    rePassword:[{required:true,validator:validateRePassword}]
  }


async function login(){
    const valid = await loginFormRef.value.validate
    if(valid){
        let {data} = await request.post("/user/login",loginForm.value)
        if(data.code == 200){
            ElMessage.success('登录成功')
            user.value = data.data
            store.changeInfo(user.value)
            loginVisible.value = false
            location.reload()
        }else{
            ElMessage.error(data.msg)
        }
    }
}

async function regist(){
    const valid = await registFormRef.value.validate
    if(valid){
        let {data} = await request.post("/user/regist",registForm.value)
        if(data.code == 200){
            ElMessage.success('注册成功')
            registVisible.value = false
            loginVisible.value = true
        }else{
            ElMessage.error(data.msg)
        }
    }
}

function logout(){
    store.logout()
    location.reload()
}

</script>

<template>
    <div class="base_div">
        <el-button color="rgb(80,80,80)" @click="loginVisible = true" v-if="store.id==0" link>登录|注册</el-button>
        <div style="display:flex;align-items:center;margin-right:10px" v-else>
            <el-button color="rgb(80,80,80)" link>欢迎{{store.name}}</el-button>
            <el-button color="rgb(80,80,80)" @click="logout" link>退出登录</el-button>
        </div>
        <el-button color="rgb(80,80,80)" @click="()=>{router.push('/orderList')}" link>我的订单</el-button>
        <el-button color="rgb(80,80,80)" link>我的收藏</el-button>
        <el-button  style="background-color:rgb(255,130, 45);margin-right:150px;width:100px"  link>购物车({{store.numInCart}})</el-button>

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
                <div style="display:flex;justify-content:space-between;align-items:center">
                    <el-button type="warning" @click="registVisible = true">注册</el-button>
                    <div>
                        <el-button @click="loginVisible = false">取消</el-button>
                        <el-button type="primary" @click="login">
                        登录
                        </el-button>
                    </div>
                    
                </div>
            </template>
        </el-dialog>
        <!-- 登录窗口END -->
        <!-- 注册窗口 -->
        <el-dialog v-model="registVisible"  title="注册" width="350">
            <el-form :model="registForm" ref="registFormRef" :rules="rules">
                <el-form-item label="用户名" prop="username" :label-width="80">
                    <el-input v-model="registForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password" :label-width="80">
                    <el-input v-model="registForm.password" autocomplete="off" type="password" show-password />
                </el-form-item>
                <el-form-item label="确认密码" prop="rePassword" :label-width="80">
                    <el-input v-model="registForm.rePassword" autocomplete="off" type="password" show-password />
                </el-form-item>
                <el-form-item label="姓名"  :label-width="80">
                    <el-input v-model="registForm.name" autocomplete="off"  />
                </el-form-item>
            </el-form>
            <template #footer>
                <div style="">
                    <div>
                        <el-button @click="registVisible = false">取消</el-button>
                        <el-button type="primary" @click="regist">
                        注册
                        </el-button>
                    </div>
                    
                </div>
            </template>
        </el-dialog>
        <!-- 注册窗口END -->
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
