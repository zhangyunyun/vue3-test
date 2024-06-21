import { onMounted, onBeforeUnmount, reactive} from 'vue'

function points(){
   let point = reactive({
      x:0,
      y:0
   })
   function getPoit(e){
      console.log(e.pageX, e.pageY)
      point.x = e.pageX
      point.y = e.pageY
   }
   //初始化立即调用
   // onMounted(() => {
   //    window.addEventListener('click', getPoit)
   // })
   //卸载钩子函数(卸载前)
   // onBeforeUnmount(() => {
   //    window.addEventListener('click', getPoit)
   // })
   return point
}

export default{
   points
}