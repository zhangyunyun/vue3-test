<template>
  <div class="home">
    <div class="content">
      <h1 class="title">子父组件传值</h1>
      <TestPass msg="我是父组件的一条消息" />

      <h1 class="title">hook函数</h1>
      <TestHook v-if="isShowDemo" :isShowDemo="isShowDemo"></TestHook>

      <h1 class="title">toRef & toRefs</h1>
      <TestToRef></TestToRef>
      <TestToRefs></TestToRefs>
      <TestToRefToRefs></TestToRefToRefs>

      <h1 class="title">shallowReactive & shallowRef</h1>
      <TestshallowReactiveRef></TestshallowReactiveRef>

      <h1 class="title">readonly & shallowReadonly</h1>
      <TestReadonlyShallowReadonly></TestReadonlyShallowReadonly>

      <h1 class="title">toRaw & markRaw</h1>
      <TestToRawMarkRaw></TestToRawMarkRaw>

      <h1 class="title">reduce</h1>
      <TestReduce></TestReduce>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import TestPass from '@/components/testPass.vue';
import TestHook from '@/components/testHook.vue';
import TestToRef from '@/components/testToRef.vue';
import TestToRefs from '@/components/testToRefs.vue';
import TestToRefToRefs from '@/components/testToRefToRefs.vue'
import TestshallowReactiveRef from '@/components/testshallowReactiveRef.vue'
import TestReadonlyShallowReadonly from '@/components/testReadonlyShallowReadonly.vue'
import TestToRawMarkRaw from '@/components/testToRawMarkRaw.vue'

import TestReduce from '@/components/testReduce.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TestPass,
    TestHook,

    TestToRef,
    TestToRefs,
    TestToRefToRefs,

    TestshallowReactiveRef,

    TestReadonlyShallowReadonly,

    TestToRawMarkRaw,

    TestReduce
  },
  setup(){
    let isShowDemo = ref(true)
    return{
      isShowDemo
    }
  }
});
</script>

<style lang="scss" scoped>
h1{
  font-size:.3rem;
  font-weight:bold;
}
.home{
  height:100%;
  background:#f5f5f5;
}
.content{
  padding:10px;
}
.title{
  margin-top:10px;
  text-align:left;
  font-weight:bold;
  font-size:15px;
}
button{
  width:150px;
  height:25px;
  line-height:25px;
  color:#fff;
  text-align: center;
  font-size:14px;
  background:#a7a7a7;
  border-radius:5px;
}
</style>