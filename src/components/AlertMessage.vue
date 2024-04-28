<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMessage(i)"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch('updateMessage', { message, status });
    },
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
  mounted() {
    const message = '';
    const status = '';
    const vm = this;
    vm.updateMessage(message, status);
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>
