<template>
  <h3 class="uk-heading-divider">
    <span class="uk-margin-small-left uk-margin-small-right" :uk-icon="'icon: '+icon"></span>{{title}}
  </h3>
</template>

<script>
export default {
  name: 'bread-crumb',
  props: ['title', 'icon']
};
</script>
