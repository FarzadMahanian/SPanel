<template>
  <entity-simple-card-view-component :value="value"></entity-simple-card-view-component>
</template>

<script>

export default {
  name: 'user-view-component',
  props: ['value'],
  data: () => {
    return {};
  }
};
</script>
