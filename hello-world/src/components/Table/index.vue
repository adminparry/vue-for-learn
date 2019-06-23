<template>
  <el-table
    border
    style="width:100%;min-width:960px;min-height:500px;"
    :data="dataSource"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <template v-for="item in column">
      <el-table-column :key="item.label" :label="item.label" v-if="!item.hasProp">
        <template slot-scope="scope">
          <span v-if="scope.row.hasOwnProperty(item.prop)">{{scope.row[item.prop] | formatDate}}</span>
          <span v-else>{{ clearUnknowProp(item) }}</span>
        </template>
      </el-table-column>
    </template>
    <slot></slot>
  </el-table>
</template>
<script>
import moment from "moment";
export default {
  name: "bmpTable",
  props: {
    dataSource: {
      required: true
    },
    column: {
      required: true
    },
    loading: {
      required: true,
    }
  },
  methods: {
    clearUnknowProp(item) {
      this.$set(item, "hasProp", true);
    }
  },
  filters: {
    formatDate(val) {
      // 在moment没找到对应的时间类型判断
      if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.000Z$/.test(val)) {
        return moment(val).format("YYYY-MM-DD HH:mm:ss");
      }

      return val;
    }
  }
};
</script>

