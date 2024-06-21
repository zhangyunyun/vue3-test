<template>
  <div class="hook">
    <div class="hookCont">
      <h2>当前求和为：{{sum}}</h2>
      <p>当前鼠标点击的坐标为：x:{{point.x}} y:{{point.y}}</p>
      <button @click="sum++">点我加1</button>
      <button @click="handleShowHide">隐藏显示</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
// import { onMounted, onBeforeUnmount} from 'vue'
import points from '@/hooks/usePoint.js';
export default {
  props:{
    isShowDemo:Boolean
  },
  setup(props){
    let sum = ref(0)
    //定义 方式一、二
    // let point = reactive({
    //   x:0,
    //   y:0
    // })
    
    //定义 方式三
    let point = points()

    //1.方式一 普通写法
    // onMounted(() => {
    //   window.addEventListener('click', (e) => {
    //     console.log(e.pageX, e.pageY)
    //     point.x = e.pageX,
    //     point.y = e.pageY
    //   })
    // })

    //2.方式二 提成公用的函数，添加卸载钩子函数
    // function getPoint(e:any){
    //   point.x = e.pageX
    //   point.y = e.pageY
    //   console.log(e.pageX, e.pageY)
    // }
    // onMounted(() => {
    //   window.addEventListener('click', getPoint)
    // })
    // onBeforeUnmount(() => {
    //   window.addEventListener('click', getPoint)
    // })

    //3.方式三 分装成公用的js文件，组件中引入使用

    console.log(props)
    //点击显示隐藏
    function handleShowHide(){
      props.isShowDemo = !props.isShowDemo
    }

    return{
      sum,
      point,
      handleShowHide
    }
  }
}
</script>

<style lang="scss" scoped>
.hookCont{
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
