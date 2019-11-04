<template>
  <div id="app">

    <el-container class="header">
  <el-header><i class="el-icon-menu" align="left"></i></el-header>
</el-container>

      <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-home"></i>Main Menu</template>

          <router-link to="/user">
          <el-menu-item index="1-2">User</el-menu-item>
          </router-link>

          <router-link to="/presence">
          <el-menu-item index="1-2">Presence</el-menu-item>
          </router-link>

          <router-link to="/paidleave">
          <el-menu-item index="1-2">PaidLeave</el-menu-item>
          </router-link>

          <router-link to="/salary">
          <el-menu-item index="1-2">Salary</el-menu-item>
          </router-link>
          

        </el-submenu>

    

    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Tom</span>
    </el-header>



    
    <el-main>
    <router-view />

    </el-main>
  </el-container>
</el-container>




  </div>
</template>

<style>
  .header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
