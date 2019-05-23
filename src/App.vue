<template>
    <router-view/>
</template>

<script>
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import toastr from 'toastr';

import '../node_modules/uikit/dist/css/uikit-rtl.css';
import '../node_modules/toastr/toastr.scss';

Vue.use(Vuelidate);
UIkit.use(Icons);
toastr.options.closeButton = true;
toastr.options.progressBar = true;
toastr.options.rtl = true;

export default {
  name: 'App'
};
</script>

<style>
</style>
