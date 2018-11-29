<template>
  <div class="app-wrapper" :class="{'hideSidebar':isCollapse}">
    <el-menu class="sidebar-container" :collapse="isCollapse" :default-active="$route.path">
      <el-menu-item index="2">
        <span slot="title">场景管理</span>
      </el-menu-item>
      <el-menu-item index="/" @click="$router.push({path:'/'})">
        <span slot="title">问卷管理</span>
      </el-menu-item>
    </el-menu>
    <div class="main-container">
      <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="!isCollapse"></hamburger>
        问卷管理
      </el-menu>
      <router-view />
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/styles/mixin.styl'
.app-wrapper
  clearfix
  position: relative
  height: 100%
  width: 100%
  .sidebar-container
    transition: width 0.28s
    width: 180px !important
    height: 100%
    position: fixed
    top: 0
    bottom: 0
    left: 0
    z-index: 1001
  .main-container
    min-height: 100%
    transition: margin-left 0.28s
    margin-left: 180px
    .navbar
      height: 50px
      line-height: 50px
      border-radius: 0 !important
      .hamburger-container
        line-height: 58px
        height: 50px
        float: left
        padding: 0 10px
        outline: none
      .breadcrumb-container
        float: left
.hideSidebar
  .sidebar-container, .sidebar-container .el-menu
    width: 0 !important
    overflow: hidden
  .main-container
    margin-left: 0
</style>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

