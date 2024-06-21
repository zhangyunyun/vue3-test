<template>
  <div class="test">
    <div class="testCont">
       <h2>----reduce</h2>
      <button type="" @click="change">点我值会变哦</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs} from 'vue'
export default{
  setup(){
    const dataOld = ref([
      {'name':'taskIds','value':'1'},
      {'name':'taskIdss','value':'2'},
      {'name':'taskIdsss','value':'3'},
    ])
    const dataNew = ref([
      {'name':'taskIds','value':'1'},
      {'name':'taskIdss','value':'2'},
      {'name':'taskIdssss','value':'4'},
    ])
    function change(){
      let result = [...dataOld.value,...dataNew.value].reduce((pre, cur) => {
        console.log(pre)
        console.log(cur)
        return pre;
      },[])
      console.log(result)
    }  
    return{
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
}
.hide{
  display:none;
}
.testCont{
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
