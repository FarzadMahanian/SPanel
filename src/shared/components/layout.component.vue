<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div id="main-content" class="content-padder">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import '../../assets/styles/style.scss';

import AppHeader from './header.component.vue';
import AppFooter from './footer.component.vue';
import AppSidebar from './sidebar.component.vue';

export default {
  name: 'app-layout',
  components: {
    AppHeader,
    AppFooter,
    AppSidebar
  }
};
</script>

<style>
</style>
