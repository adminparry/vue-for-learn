<template>
  <div class="menu-wrapper">
    <!-- <el-scrollbar class="scrollbar-wrapper" wrap-class="scrollbar-wrap"> -->
    <el-menu
      :default-active="defaultActive"
      background-color="#545c64"
      text-color="#fff"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
  
      <SidebarItem v-for="item of routes" :key="item.path" :item="item" :path="item.path"/>
    
    </el-menu>
     <!-- </el-scrollbar> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import variables from "@/styles/variables.scss";
import SidebarItem from "./SidebarItem";

export default {

  components: {
    SidebarItem
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    ...mapGetters(["sidebar", "routes"]),
    defaultActive() {
      const routes = this.$route;
      const { path } = routes;
      console.log(path)
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      console.log(this.routes);
      return !this.sidebar.opened;
    }
  }
};
</script>
<style>

    .menu-wrapper{
        /* background-color: #545c64; */
        height: 100%;
        overflow-y: scroll
    }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }
   .el-menu-vertical{
       min-height: 100%;
   }
  .scrollbar-wrapper{
      height: 100%;
  }
  .scrollbar-wrap{
      
  }

</style>

