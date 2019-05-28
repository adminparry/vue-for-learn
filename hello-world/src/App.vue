<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/apollo">Apollo</router-link> |
      <router-link to="/fade">fade</router-link> |
      <router-link to="/login">login</router-link> |
      
      <router-link to="/about">About</router-link>
      <element-size />
    </div> -->
    
    <div class="header-container">
      
      <i class="el-icon-edit" @click="toggleSideBar"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </div>
    <!-- <el-row>
        <el-col :span="2"><svg class="header-menu" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path data-v-4e6f274c="" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path></svg></el-col>
        <el-col :span="2"><a href="">大综台</a></el-col>
    </el-row> -->
      
    <router-menu  class="menu-container"/>

    <router-view class="views-container"/>
  </div>
</template>
<script>
import ElementSize from '@/components/ElementSize'
import RouterMenu from '@/components/Menu'
import { mapGetters } from 'vuex'
export default {
  components: {
    ElementSize,
    RouterMenu
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  },
  computed: {
    ...mapGetters(["sidebar"]),
    classObj() {
      console.log(this.sidebar.opened)
      return {
        openSidebar: !this.sidebar.opened,
      }
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}
#app .openSidebar{
  width: 65px;
}
.menu-container{
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 200px;
  height: 100%;
}
.views-container{
  margin-left: 200px;
  position: relative;
  top: 50px;
  min-height: 100%;
}
.header-container{
  position: fixed;
  height: 50px;
  top:0;
  left: 0;
  right: 0;
  background: #1976d2;
  z-index: 999;
  text-align: left;
  font-size: 50px;
  color: white;
  box-sizing: border-box
}
.header-container i{
  vertical-align: super;
  cursor: pointer;
}
.row-header{
  line-height: 50px;
}
.header-menu{
  font-size: 30px;
  width: 50px;
  color: aliceblue;
}
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
