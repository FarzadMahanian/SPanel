<template>
  <app-anonymous-layout>
      <jsx-renderer :renderi="getElement"></jsx-renderer>
  </app-anonymous-layout>
</template>

<script>

export default {
  data: () => {
    return {
    };
  },
  methods: {
    getElement() {
      return <h1>Hello world</h1>;
    }
  }
};
</script>

<style>
</style>
