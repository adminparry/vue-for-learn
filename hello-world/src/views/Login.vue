<template>
<div class="login-container">
   

  <div style="margin: 20px;"></div>
  <el-form :label-position="pos" :size="size" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="formLabelAlign.region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="formLabelAlign.type"></el-input>
    </el-form-item>
  </el-form>
</div>
  
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      }
    };
  },
  computed: {
      size() {
          return this.$store.getters.size;
      },
      pos() {
          return this.$store.getters.pos;
      }
  }
};
</script>
