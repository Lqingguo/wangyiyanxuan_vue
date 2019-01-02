<template>
  <div id="app">
    <router-view/>
    <Food></Food>
  </div>
</template>

<script>
  import Food from './components/Food/Food.vue'
export default {
    components:{
      Food
    }
}
</script>

<style>

</style>
