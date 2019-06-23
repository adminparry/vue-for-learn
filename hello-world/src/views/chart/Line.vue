<template>
  <div class="chart-line-container">
    line
    <!-- <div ref="Smoothed" style="width:100%;height:100%;"></div> -->
    
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div ref="area" style="width:100%;height:300px;"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div ref="Smoothed" style="width:100%;height:300px;"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div ref="basic" style="width:100%;height:300px;"></div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div ref="marker" style="width:100%;height:600px;"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div ref="polar" style="width:100%;height:600px;"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div ref="step" style="width:100%;height:600px;"></div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Smoothed, area, basic, step, polar, marker } from "./types/line";
import echarts from "echarts";
export default {
  mounted() {
    this.initChart();
    window.addEventListener("resize", () => {
      this.Smoothed.resize();
      this.area && this.area.resize();
      this.basic && this.basic.resize();

      this.step.resize();
      this.polar && this.polar.resize();
      this.marker && this.marker.resize();
    });
  },
  methods: {
    initChart() {
      this.Smoothed = echarts.init(this.$refs["Smoothed"]);
      this.Smoothed.setOption(Smoothed);

      this.area = echarts.init(this.$refs["area"]);
      this.area.setOption(area);

      this.basic = echarts.init(this.$refs["basic"]);
      this.basic.setOption(basic);
      // step polar marker
      this.marker = echarts.init(this.$refs["marker"]);
      this.marker.setOption(marker);

      this.polar = echarts.init(this.$refs["polar"]);
      this.polar.setOption(polar);

      this.step = echarts.init(this.$refs["step"]);
      this.step.setOption(step);
    }
  }
};
</script>
<style>
.chart-line-container {
  background: #f0f2f5;
  padding: 50px 20px 0px 20px;
  position: relative;
}
.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
  border-radius: 5px;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>


