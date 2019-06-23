<template>
  <div class="header-container">
    <div class="drawer">
      <i :class="collapse   ? 'el-icon-notebook-1': 'el-icon-notebook-2'" @click="toggleSideBar"></i>
    </div>
    <!-- <span class="exit" @click="exit">退出</span> -->
    <el-dropdown class="avatar-container layout" trigger="click">
      <div class="avatar-wrapper">
        <img :src="userInfo.user.avatar_url ? userInfo.user.avatar_url :'https://cn.vuejs.org/images/logo.png'" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      
      
      <el-dropdown-menu slot="dropdown">
        <router-link to="/">
          <el-dropdown-item>主页</el-dropdown-item>
        </router-link>

        <el-dropdown-item divided>
          <span @click="exit">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["collapse","userInfo"])
  },
  methods: {
    toggleSideBar() {
      // toggle menu
      this.$store.dispatch("elementSettings/toggleSideBar");
    },
    exit() {
      this.$fetch({
        url: "/api/logout",
        method: "get"
      }).then(res => {
        if (!res) return;
        window.location.reload();
        this.$router.replace({ path: "/login" });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.header-container {
  position: fixed;
  height: 50px;
  // line-height: 50px;
  top: 0;
  left: 0;
  right: 0;
  background: #1976d2;
  z-index: 2020;
  text-align: left;
  color: white;
  box-sizing: border-box;
  overflow: hidden;
  .row-header {
    line-height: 50px;
  }
  .header-menu {
    font-size: 30px;
    width: 50px;
    color: aliceblue;
  }
  .drawer {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    width: 64px;
    height: 50px;
    line-height: 50px;
    font-size: 34px;
    background: royalblue;
  }
  .drawer-open {
    width: 200px;
  }
  // 布局
  .layout {
    float: right;
    margin-right: 30px;
    height: inherit;
    overflow: hidden;
  }
  .layout:before{
    width: 0;
    height: inherit;
    content: "";
    display: inline-block;
    vertical-align: middle;
  }
  // 用户头像菜单
  .avatar-container {
    
    .avatar-wrapper {
      display: inline-flex;
      vertical-align: middle;
      align-items: center;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #cccccc;
        background: white;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        color: white;
      }
    }
  }
}
</style>

