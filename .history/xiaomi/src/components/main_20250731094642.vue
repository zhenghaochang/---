<script setup>

</script>

<template>
    <div style="width:100%;height:100px;background:blue">
        <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item index="2-1">用户列表</el-menu-item>
      <el-menu-item index="2-2">角色管理</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>禁用菜单</span>
    </el-menu-item>
  </el-menu>
    </div>
</template>

<style scoped>

</style>
