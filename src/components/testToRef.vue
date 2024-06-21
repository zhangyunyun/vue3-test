<template>
  <div class="ref">
    <div class="refCont">
      <h2>----toRef</h2>
      <div>{{money}}</div>
      <button type="" @click="change">toRef</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRef} from 'vue'
export default{
  setup(){
    let obj = reactive({
      take:{
        money:100
      }
    })
    function change(){
      obj.take.money += 100
    }
    console.log(obj.take)
    return{
      /* 
        toRef将money属性单独提供给外部使用，便于简写界面渲染可直接使用money
        这里obj.take是toRef创建的新对象，并不能使源obj响应式修改
      */
      money:toRef(obj.take, 'money'),  
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
.ref{}
.refCont{
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
