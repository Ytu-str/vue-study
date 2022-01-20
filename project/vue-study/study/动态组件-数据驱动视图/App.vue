<template>
  <div>
    <component v-for="item in list" :is="item">
    
    </component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyTop from './components/MyTop.vue'
import MyBanner from './components/MyBanner.vue'

export default {
  name: 'App',
  data() {
    return {
      list:[
        "MyTop",
        "MyBanner"
      ]      
    }
  },
  components: {
    HelloWorld,
    MyTop,
    MyBanner
  }
}
</script>
