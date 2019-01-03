<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
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
