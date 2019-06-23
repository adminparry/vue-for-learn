<template>
  <div class="menu-wrapper">
    <!-- <el-scrollbar class="scrollbar-wrapper" wrap-class="scrollbar-wrap"> -->
    <el-menu
      :default-active="defaultActive"
      :background-color="color"
      :text-color="fontColor"
      active-text-color="#ccc"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="collapse"
    >
      
      <SidebarItem v-for="item of routes" :key="item.name" :item="item" :path="item.path"/>
    
    </el-menu>
     <!-- </el-scrollbar> -->
  </div>
</template>
<script>
import Mixin from '@/mixin/elementGlobal';

import { mapGetters } from "vuex";
import variables from "@/styles/variables.scss";
import SidebarItem from "./SidebarItem";

export default {
  mixins:[Mixin],
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
    collapse: {
        get() {
            return this.$store.getters.collapse;
        },
        set(val) {

            this.$store.state.elementSettings.collapse = val;
        }
    },
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

