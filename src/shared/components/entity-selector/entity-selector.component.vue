<template>
  <div class="uk-box-shadow-small uk-padding uk-margin-medium-bottom">
    <div v-if="state===0 || state===1">
      <component
        :is="viewComponent"
        v-for="item in value"
        :key="item"
        :value="item"></component>
    </div>
    <hr class="uk-divider-icon" v-if="state===2 || state===0"/>
    <div v-if="state===0">
      <button class="uk-button uk-button-primary" @click="changeToSelectMode()">
        <span uk-icon="icon: search"></span>
        انتخاب
      </button>
      <button class="uk-button uk-button-primary" @click="changeToCreateMode()" v-if="canCreate">
        <span uk-icon="icon: pencil"></span>
        ایجاد
      </button>
    </div>
    <hr class="uk-divider-icon" v-if="state===1"/>
    <div v-if="state===1">
      <component
        :is="selectComponent"
        :options="options"
        @cancel="onEntitySelectCancel"
        @input="onEntitySelected"></component>
    </div>
    <hr class="uk-divider-icon" v-if="state===2"/>
    <div v-if="state===2">
      <component
        v-if="canCreate"
        :is="createComponent"
        @cancel="onNewEntityCancel"
        @submit="onNewEntitySubmit"></component>
    </div>
  </div>
</template>

<script>
// import * as _ from 'lodash';
import EntityDropdownSelect from './entity-dropdown-select.component.vue';

const StateTypes = {
  VIEW: 0,
  SELECT: 1,
  CREATE: 2
};

export default {
  components: {
    EntityDropdownSelect
  },
  props: {
    value: Array,
    options: Array,
    canCreate: {
      type: Boolean,
      default: false
    },
    selectComponent: {
      default: () => EntityDropdownSelect
    },
    entityName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      state: StateTypes.VIEW
    };
  },
  computed: {
    createComponent() {
      return this.entityName + '-create-component';
    },
    viewComponent() {
      return this.entityName + '-view-component';
    }
  },
  methods: {
    changeToSelectMode() {
      this.state = StateTypes.SELECT;
    },
    changeToCreateMode() {
      this.state = StateTypes.CREATE;
    },
    onEntitySelectCancel() {
      this.state = StateTypes.VIEW;
    },
    onEntitySelected(event) {
      const index = this.value.indexOf(event);
      if (index > -1) {
        return;
      }
      this.value.push(event);
      this.state = StateTypes.VIEW;
      this.$emit('input', this.value);
    },
    onNewEntityCancel() {
      this.state = StateTypes.VIEW;
    },
    onNewEntitySubmit(formData) {
      console.log(formData);
      this.state = StateTypes.VIEW;
    }
  }
};
</script>
