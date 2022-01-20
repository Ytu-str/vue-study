<template>
  <div>
      <Fruitlist/>
  </div>
</template>

<script>
import Fruitlist from './components/Fruitlist.vue'
import {ref,reactive,onMounted,computed} from 'vue'
// 组合api
export default {
    setup() {

       return {

       }
    },
    components:{
        Fruitlist
    }
}
</script>
