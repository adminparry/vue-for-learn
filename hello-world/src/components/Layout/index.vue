<template>
  <div class="main-view">
    <!-- 头部 -->
    <router-header />
    <!-- 主视图 -->
    <router-view class="content-view" :class="collapse && 'content-view-small'"/>
    <!-- 菜单的层级相对较高 -->
    <router-menu class="menu-container" :class="collapse && 'menu-container-small'"/>
  </div>
</template>
<script>
import ElementSize from "@/components/ElementSize";
import RouterMenu from "@/components/Menu";
import RouterHeader from "@/components/Header";


export default {
  components: {
    ElementSize,
    RouterMenu,
    RouterHeader,
  },
  computed: {
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
.main-view {
  height: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
}

.content-view {
  /* 65和200切换 */
  padding: 20px;
  margin-left: 200px;
  margin-top: 50px;
  min-height: 100vh;
  position: relative;
  transition: margin-left .3s;
}
.content-view-small{
  margin-left: 65px;
}
.menu-container {
  /* 固定定位流出header位置 */
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 200px;
  height: 100%;
  overflow: hidden;
  transition: width .3s;
}
.menu-container-small {
  width: 64px;
}
/* 去掉html标签默认margin */
html,
body {
  margin: 0;
}
</style>


