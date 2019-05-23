<template>
  <div class="view-row">{{value}}</div>
</template>

<script>
export default {
  name: 'entity-simple-card-view-component',
  props: ['value']
};
</script>

<style scoped>
  .view-row {
    background-color: #f7f7f7;
    padding:10px;
    margin-bottom:5px;
  }
</style>
