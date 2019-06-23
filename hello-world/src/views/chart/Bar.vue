<template>
  <div class="chart-bar-container">

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div ref="animation" style="width:100%;height:500px;"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div ref="multiple" style="width:100%;height:500px;"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div ref="waterfall2" style="width:100%;height:500px;"></div>
        </div>
      </el-col>
      
    </el-row>

  </div>
</template>
<script>
import {animation, multiple, waterfall2} from './types/bar';

import echarts from "echarts";
export default {
  mounted() {
    this.initChart();
    window.addEventListener('resize', () => {
         this.animation.resize();
         this.multiple.resize();
         this.waterfall2.resize();
         
    })
  },
  methods: {
    initChart() {
      this.animation = echarts.init(this.$refs["animation"]);
      
      this.animation.setOption(animation);

      this.multiple = echarts.init(this.$refs["multiple"]);
      
      this.multiple.setOption(multiple);

      this.waterfall2 = echarts.init(this.$refs["waterfall2"]);
      
      this.waterfall2.setOption(waterfall2);

      
    }
  }
};
</script>
<style>
.chart-bar-container{
    min-height: 100vh;
    background: #f0f2f5;
    padding: 70px 20px 0px 20px;
}
.chart-wrapper{
    padding: 30px;
    background: white;
    border-radius: 4px;
    margin-bottom: 14px;
}
</style>

