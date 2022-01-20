<template>
  <div>
      <h1>{{title}}</h1>
      <h1>{{number}}</h1>
      <h1>{{student.name}}</h1>
      <button @click="sayHi">按钮</button>
  </div>
</template>

<script>
import {ref,reactive,onMounted,computed} from 'vue'
// 组合api
export default {
    setup() { // setup = created
        let list =['你好','亲爱的用户','很高兴见到你']
        const title = ref("")
        onMounted(()=>{
           let i = 0;
           let t = setInterval(()=>{
               title.value = list[i]
               i++;
               if(i === 3){
                   clearInterval(t)
               }
           },500)
        })
        // 响应式变量
        // let title = ref('hello word');
        const student = reactive({
            name:"小明",
            age:2
        })
        function sayHi(){
            // title.value = "haha"
            student.name = "小红"
        }
        // 计算属性
        const number = computed(()=>{
            return 100;
        })
        return {
            student,
            sayHi,
            title,
            number
        }
    }
}
</script>
