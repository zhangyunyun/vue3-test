<template>
  <div class="refs">
    <div class="refsDemo">
      <h2>----toRef & toRefs</h2>
      <!-- 0 普通方式 -->
      <!-- <div class="text">
        <div>{{data.name}}</div>
        <div>{{data.obj.name}}</div>
        <div>{{data.obj.moneys.money}}</div>
      </div> -->

      <!-- 第一种方法 : 结果丢失了响应式-->
      <!-- <div>姓名 : {{name}}</div>
      <div>公司 : {{name1}}</div>
      <div>工资 : {{money}}</div> -->

      <!-- 第二种方法 : 使用toRef处理 指向另一个对象中的某个属性 可以直接使用定义的属性-->
      <!-- <div>姓名 : {{name}}</div>
      <div>公司 : {{name1}}</div>
      <div>工资 : {{money}}</div> -->

      <!-- 第三种方法 : 使用toRefs处理 指向整个对象的所有属性 可以直接使用定义的属性 -->
      <div>姓名 : {{name}}</div>
      <div>公司 : {{obj.name}}</div>
      <div>工资 : {{obj.moneys.money}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRef, toRefs } from 'vue'
export default{
  setup(){
    let data = reactive({
      name:'吴宇腾',
      obj:{
        name:'sqy',
        moneys:{
          money:20
        }
      }
    })

    /* 
      000 普通方式 暴露定义的属性
    */
    // return{
    //   data 
    // }

    // 第一种方法的毛病 : 
    // let nameY  = data.name 
    // console.log('获取原值:',nameY) //得到吴宇腾
    // nameY = '杨志伟' //修改了值
    // console.log('修改后的值:',nameY) //得到是杨志伟
    // console.log('定义的原值:,data) //但是data里面的值没有被修改值还是吴宇腾
    /* 
      1. 方式一 普通方式------直接使用定义的属性 暴露定义的属性
    */
    // return {
    //   name : data.name,
    //   name1 : data.obj.name,
    //   money : data.obj.moneys.money
    // }
      

    // 第二种方法的好处 : 响应式
    // let nameX = toRef(data, 'name')
    // console.log('获取data响应式的值:', nameX.value) //得到吴宇腾
    // data.name = '杨志伟' //修改了值
    // console.log('修改后data的值:', data.name,'对应响应式的值:', nameX.value)  //得到是杨志伟、响应式的值得到是杨志伟
    // console.log('定义的初始值:', data) //初始定义的原值也被修改了，值为杨志伟
    /* 
      2. 方式二 toRef方式-----
    */
    // return{
    //   name : toRef(data,'name'),
    //   name1 : toRef(data.obj,'name'),
    //   money : toRef(data.obj.moneys,'money')
    // }
      
      
    /* 
      3. 方式三 toRefs-----简化,只能得到第一层哦 toRefs(多个的)
    */
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss" scoped>
h1{
  font-size:15px;
  text-align:left;
}
h2{
  font-size:12px;
  text-align:left;
}
.hide{
  display:none;
}
.refsDemo{
  margin-top:10px;
  text-align:left;
  button{
    padding:0 10px;
    height:25px;
    line-height:25px;
    color:#fff;
    text-align: center;
    font-size:14px;
    background:#a7a7a7;
    border-radius:5px;
  }
}
</style>
