<template>
  <section>
    <p>Username is: {{ username }}</p>
    <button @click="changeUsername">Change value</button>
  </section>
</template>

<script>
export default {
  name: 'app-widget',
  props: ['username'],
  methods: {
    changeUsername() {
      this.$emit('onUsernameChanged', 'val' + Math.random());
    }
  }
};
</script>

<style scoped>
  section {
    background-color: azure;
    border: solid 1px royalblue;
  }
</style>
