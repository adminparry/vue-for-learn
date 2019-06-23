<template>
  <div class="tree-container">
 
    <el-tree
      :data="data"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
    ></el-tree>

  </div>
</template>

<script>
let id = 1000;

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: "root"
        }
      ],

      defaultProps: {
        children: "children",
        label: "detail"
      }
    };
  },
  computed: {},
  created() {
    this.getTree().then(data => (this.data = data));
    console.log(9);
  },
  methods: {

    
    getTree() {
      return this.$fetch({
        url: "/api/permission/tree",
        method: "GET"
      });
    },
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data, store }) {
      console.log(node, data, store);
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
            <span>{node.label}</span>
          </span>
          <span>
            <el-button
              style="font-size: 12px;"
              type="text"
              on-click={() => this.append(data)}
            >
              添加
            </el-button>
            <el-button
              style="font-size: 12px;"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              删除
            </el-button>
          </span>
        </span>
      );
    }
  }
};
</script>