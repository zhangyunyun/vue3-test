<template>
  <div class="refs">
    <div class="refsCont">
      <h2>----toRefs</h2>
      <div>{{money}}</div>
      <div>{{age}}</div>
      <button type="" @click="change">toRefs</button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
export default{
  setup(){
    let obj = reactive({
      money: 200,
      age: 18
    })
    function change(){
      obj.money += 200
      obj.age++
    }
    /* 
      //toRefs生成的是一个和obj源对象关联的处理对象集合
    */
    console.log(toRefs(obj))
    return{
      ...toRefs(obj),
      change
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
  font-weight:bold;
}
.hide{
  display:none;
}
.refsCont{
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
