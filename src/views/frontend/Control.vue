<template>
  <div>
    <Navbar></Navbar>
    <div class="row no-gutters">
      <div class="col-md-3 pr-5" style="background-color: #f8f9fa;">
        <Sidebar></Sidebar>
      </div>
      <div class="col-md-9 pr-2 pl-2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/ControlNavbar.vue';
import Sidebar from '../../components/ControlSidebar.vue';

export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
