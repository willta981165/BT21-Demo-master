<template>
  <div id="app">
     <!-- <Navbar></Navbar> -->
     <Alert></Alert>
     <router-view></router-view>
  </div>
</template>

<script>
// import $ from 'jquery';
import Alert from './components/AlertMessage.vue';

export default {
  components: {
    Alert,
  },
};
</script>

<style lang="scss">
@import "~@/assets/all.scss";
</style>
