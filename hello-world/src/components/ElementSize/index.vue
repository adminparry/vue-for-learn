<template>
<div class="radio-group-container">
    <el-radio-group v-model="size" :size="size" trigger="click" @command="handleSetSize">
    <el-radio-button 
    v-for="item of sizeOptions" :key="item.label" 
    :label="item.label"
    :disabled="item.label == size"
    >{{ item.value }}</el-radio-button>
    
  </el-radio-group>
  <br>
   <el-radio-group v-model="pos" :size="size">
    
    <el-radio-button 
    v-for="item of positionOptions" 
    :key="item.value"
    :disabled="item.value == pos"
    :label="item.value">{{item.value}}</el-radio-button>
    
  </el-radio-group>
  <br>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
    <div @click="handleSetSize(size)">element</div>
</div>
  
</template>
<script>
export default {
    data() {
        return {
            positionOptions:[
                {label:'left',value:'left'},
                {label:'right',value:'right'},
                {label:'top',value:'top'},
                
            ],
            sizeOptions: [
                { label: 'default', value: '默认'},
                { label: 'medium', value: '中等'},
                { label: 'small', value: '小'},
                { label: 'mini', value: '超小'},
            ],
        }
    },
    computed: {
        size: {
            get() {
                 return this.$store.getters.size 
            },
            set(val) {
                this.$store.state.app.size  = val;
            }
        },
        pos: {
            get() {
                return this.$store.getters.pos;
            },
            set(val) {
                this.$store.state.app.pos = val;
            }
        }
    },
    methods: {
        handleSetSize(size){

            this.$ELEMENT.size = 'default';
            // this.$store.dispatch('app/setSize', size);

        }
    }
};
</script>
