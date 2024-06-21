<template>
  <div class="refs">
    <div class="refsDemo">
      <div>--------------shallowReactive</div>
      <div class="sideBox">
        <!-- <div>姓名：{{name}}</div>
        <div>年龄：{{age}}</div>
        <div>喜欢的水果：{{likeFood.fruits.apple}}</div>
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click="likeFood.fruits.apple = '香蕉'">修改水果</button> -->
      </div>
      <div class="sideBox">
        <!-- <div>{{testReactive}}</div>
        <button @click="changeReactive">修改shallowReactive包装的对象</button> -->
      </div>
      <div>---------------shallowRef</div>
      <div class="sideBox">
        <!-- <div>{{testRef}}</div>
        <button @click="changeRef">修改shallowRef包装的对象</button> -->
      </div>
      <div>---------------triggerRef</div>
      <div class="sideBox">
        <!-- <div>{{testTriggerRef}}</div>
        <button @click="changeTriggerRef">修改triggerRef包装的对象</button> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs } from 'vue'
import { ref, reactive, shallowReactive, shallowRef } from 'vue'
import { triggerRef } from 'vue'
export default{
  setup(){
    //只会处理第一层属性
    const person = shallowReactive({ //只将第一层数据做了响应式处理
      name:'张三',
      age:18,
      likeFood:{
        fruits:{
          apple:'苹果'  //深层次的数据将会是一个普通的对象，值不会被修改
        }
      }
    })

    //------------------------shallowReactive
    const testReactive = shallowReactive({
      a:{
        b:'b'
      }
    })
    function changeReactive(){
      //testReactive.a.b = 'newB' //b是深层属性，值未改变
      // testReactive.a = {b:'newB'} //a是第一层属性，只修改了a的值

      triggerRef(testTriggerRef) //用triggerRef方法 可响应shallowReactive包装的深层属性
      testReactive.a.b = 'newB' //b是深层属性，值未改变
    }

    //------------------------shallowRef
    const testRef = shallowRef({
      a:'a'
    })
    function changeRef(){
      testRef.value.a = 'newA'
      // testRef.value = {a:'newA'} //可以响应数据
    }

    //-------------------------triggerRef
    const testTriggerRef = shallowRef({
      a:'a',
      b:'b'
    })
    function changeTriggerRef(){
      /* 
        这里的数据不会响应，值不会被改变
      */
      // testTriggerRef.value.a = 'newA'
      // testTriggerRef.value.b = 'newB'

      /* 
        使用triggerRef包裹，这里的数据会响应，值会被改变
      */
      triggerRef(testTriggerRef)
      testTriggerRef.value.a = 'newA'
      testTriggerRef.value.b = 'newB'
    }
    
    /* 
      shallowReactive只处理对象最外层属性的响应式（浅响应式）
      shallowRef只处理基本数据类型的响应式, 不进行对象的响应式处理
    */
    return{
      ...toRefs(person),
      
      testReactive,
      changeReactive,

      testRef,
      changeRef,

      testTriggerRef,
      changeTriggerRef
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
