<template>
<div class="radio-group-container">



    <el-form  label-suffix=":" :size="size">
    <el-form-item label="整体风格大小" >

      <el-radio 

      v-model="size"  v-for="item of sizeOptions" :key="item.label" 
    :label="item.label" 
    >{{ item.value }}</el-radio>


    </el-form-item>
    <el-form-item label="菜单方式">
      <el-radio v-model="collapse"  v-for="item of menuOptions" :key="item.label" 
    :label="item.label"
    >{{ item.value }}</el-radio>
    

    </el-form-item>
    <el-form-item label="表单排列方式">
      <el-radio v-model="pos"  v-for="item of positionOptions" :key="item.label" 
    :label="item.label"
    >{{ item.value }}</el-radio>
    

    </el-form-item>
    <el-form-item label="颜色风格">
     <el-color-picker v-model="color" :size="size"></el-color-picker>
    </el-form-item>


    <el-form-item label="字体颜色风格">
     <el-color-picker v-model="fontColor" :size="size"></el-color-picker>
    </el-form-item>


    <el-form-item>
    </el-form-item>
  </el-form>    
   

</div>
  
</template>
<script>
import Mixin from '@/mixin/elementGlobal'

export default {
    mixins:[Mixin],
    data() {
        return {
            radio6: '北京',
            menuOptions:[
                {label:true, value:'收起'},
                {label:false, value:'展开'},

            ],
            positionOptions:[
                {label:'left',value:'左'},
                {label:'right',value:'右'},
                {label:'top',value:'上'},
                
            ],
            sizeOptions: [
                { label: 'default', value: '默认'},
                { label: 'medium', value: '中等'},
                { label: 'small', value: '小'},
                { label: 'mini', value: '超小'},
            ],

        }
    },
   
    methods: {
        handleSetSize(size){
            alert(size)
            //this.$ELEMENT.size = 'default';
            // this.$store.dispatch('app/setSize', size);

        }
    }
};
</script>
