<template>
  <div class="refs">
    <div class="refsDemo">
      <h2>--------------toRaw</h2>
      <div class="sideBox">
        <div>{{money}}</div>
        <div>{{age}}</div>
        <button @onclick="change1">toRaw</button>
      </div>

      <h2>--------------markRaw</h2>
      <div class="sideBox">
        <div>{{money}}</div>
        <div>{{age}}</div>
        <div>person.name:{{person.name}}</div>
        <div>person.class:{{person.class}}</div>
        <button @onclick="change2">markRaw</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { toRefs } from 'vue'
import { ref, reactive, toRaw, markRaw } from 'vue'
export default{
  setup(){
    const obj1 = reactive({
      money: 100,
      age: 18,
    })

    //-----------------------toRaw
    function change1(){
      /* 
        将reactive包装的对象转为普通对象,对这个普通对象的所有操作，不会引起页面更新
      */
      let p = toRaw(obj1) 
      p.money += 100
      p.age++
    }

    //-----------------------markRaw
    const obj2 = reactive({
      money: 100,
      age: 18,
      person: {}
    })
    function change2(){
      /* 
        当定义好的对象后面需要再加入新的属性时
        obj.person = person //此时也是响应式数据，如果当新增的数据对象非常复杂，只要求展示的时候，
        就要求不是响应式对象时 
      */
      const person = { name: 'xixi', class: 'one' }
      obj2.person = markRaw(person)
    }

     
    return{
      ...toRefs(obj1),
      change1,

      ...toRefs(obj2),
      change2
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
