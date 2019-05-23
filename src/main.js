// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import vSelect from 'vue-select';

import App from './App';
import router from './router';
import store from './store';
import AppLayoutComponent from './shared/components/layout.component.vue';
import AppAnonymousLayoutComponent from './shared/components/anonymous-layout.component.vue';
import FloatingLabeledInputComponent from './shared/components/floating-labeled-input.component';
import BreadCrumbComponent from './shared/components/bread-crumb.component';
import FormFieldComponent from './shared/components/form-field.component.vue';
import TextFieldComponent from './shared/components/text-field.component.vue';
import EntitySelectorComponent from './shared/components/entity-selector/entity-selector.component.vue';
import EntitySimpleCardViewComponent from './shared/components/entity-selector/entity-simple-card-view.component.vue';
import UserCreateComponent from './entities/user/create.component.vue';
import UserViewComponent from './entities/user/view.component.vue';
import DataTableComponent from './shared/components/data-table/data-table.component';
import LoadingButtonComponent from './shared/components/loading-button.component';
import JsxRendererComponent from './shared/components/jsx-renderer.component';
import * as types from './store/types';

Vue.component('date-picker', VuePersianDatetimePicker);
Vue.component('v-select', vSelect);
Vue.component('app-layout', AppLayoutComponent);
Vue.component('app-anonymous-layout', AppAnonymousLayoutComponent);
Vue.component('floating-labeled-input', FloatingLabeledInputComponent);
Vue.component('bread-crumb', BreadCrumbComponent);
Vue.component('form-field', FormFieldComponent);
Vue.component('text-field', TextFieldComponent);
Vue.component('entity-selector', EntitySelectorComponent);
Vue.component('entity-simple-card-view-component', EntitySimpleCardViewComponent);
Vue.component('user-create-component', UserCreateComponent);
Vue.component('user-view-component', UserViewComponent);
Vue.component('data-table', DataTableComponent);
Vue.component('loading-button', LoadingButtonComponent);
Vue.component('jsx-renderer', JsxRendererComponent);
Vue.config.productionTip = false;

router.onReady(() => {
  store.commit(types.APP_SET_INITIAL_PATH, router.currentRoute.fullPath);
  router.push('Splash');
});
store.dispatch(types.AUTH_ACT_INITIALIZE);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
