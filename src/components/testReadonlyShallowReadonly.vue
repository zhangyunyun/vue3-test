<template>
  <div class="refs">
    <div class="refsDemo">
      <div class="sideBox">
        <h4>当前求和为：{{sum}}</h4>
        <button @click="sum++">点我++</button>
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>薪资：{{job.j1.salary}}K</h2>
        <button @click="name+='~'">修改姓名</button>
        <button @click="age++">增长年龄</button>
        <button @click="job.j1.salary++">涨薪</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs } from 'vue'
import { ref, reactive, readonly, shallowReadonly } from 'vue'
export default{
  setup(){
    let sum = ref(0)
    let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    //-----------------------readonly
    /* 
      所有属性都为只读，不可以修改
      所有第一层属性、嵌套属性都为只读
    */
    // sum = readonly(sum)  
    // person = readonly(person)

    //-----------------------shallowReadonly
    /* 
      第一层属性为只读，不可以修改
      只有内层job.j1.salary属性可以修改
    */
    // sum = shallowReadonly(sum) 
    // person = shallowReadonly(person)  

    return{
      sum,
      ...toRefs(person)
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
    width:80px;
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
