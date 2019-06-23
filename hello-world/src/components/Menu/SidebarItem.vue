<template>

    <!-- 如果路由中的子路由只有一个则不进行下拉 -->
    <!-- 顶级路径前面必须要加个/ children路由path前不能加/ -->
    <router-link class="no-underline" v-if="!item.children" :to="path">
    <el-menu-item :index="path">
        <i :class="item.icon || 'el-icon-location'"></i>
        <span slot="title">{{item.meta.title}}</span>
    </el-menu-item>
    </router-link>

    <router-link class="no-underline" v-else-if="item.children.length == 1" :to="path.replace(/^(\/\w+)$/,'$1/') + item.children[0].path">
    <el-menu-item :index="path.replace(/^(\/\w+)$/,'$1/') + item.children[0].path">
        <i :class="item.children[0].icon || 'el-icon-location'"></i>
        <span slot="title">{{item.children[0].meta.title}}</span>
    </el-menu-item>
    </router-link>

    <el-submenu v-else :index="path" class="submenu">
        <template slot="title">
          <i :class="item.icon || 'el-icon-location'"></i>
          <span slot="title">{{item.meta.title}}</span>
        </template>
        <sidebar-item v-for="itemChild of item.children" :key="itemChild.path"
        :item="itemChild" :path="[path, itemChild.path].join('/')">

        </sidebar-item>
    </el-submenu>
   
</template>
<style>
.no-underline{
    text-decoration: none;
}

</style>

<script>
import path from 'path'
import {isExternal} from '@/utils/validate'
export default {
  name: "SidebarItem",

  //   mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ""
    },
    path: {
        type: String,
        default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
