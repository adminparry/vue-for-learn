<template>
  <el-radio-group v-model="radio6" disabled size="mini" fill="red">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
</template>

<script>
  import { testXHR } from '@/fetchers/login'
  export default {
    data () {
      return {
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海'
      };
    },
    created(){
      testXHR(this)
    },
    methods: {
      
    }
  }
</script>