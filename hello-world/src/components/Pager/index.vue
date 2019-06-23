<template>
  <el-pagination
    v-if="total > 0"
    style="background:white;margin: 20px 0;padding:10px;"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    background
  ></el-pagination>
</template>
<script>
export default {
  data() {
    return {
      pageSizes: [100, 200, 300, 400]
    };
  },
  watch:{
    currentPage(val){
      console.log(val)
    }
  },
  props: {
    total: {
      required: true,
      type: Number
    },
    pageSize: {
      required: true,
      type: Number
    },
    currentPage: {
      required: true,
      type: Number
    },
    handleCurrentChange: {
      required: true,
      type: Function
    },
    handleSizeChange: {
      required: true,
      type: Function
    }
  },
  created() {
    if (this.pageSizes.indexOf(this.pageSize) <= -1) {
      this.pageSizes = [this.pageSize, ...this.pageSizes];
    }
  }
};
</script>

