<template>
  <div class="test">
    <div class="testCont">
      <h1>{{ msg }}</h1>
      <h2>{{ tt }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue'
export default{
  props:['msg'],
  setup(){
    let tt = ref('我是子组件的一条自定义消息')
    function test(){
      console.log(tt.value)
    }
    return{
      tt,
      test
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
</style>
